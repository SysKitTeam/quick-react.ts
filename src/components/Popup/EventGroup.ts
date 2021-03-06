export interface IEventRecord {
  target: any;
  eventName: string;
  parent: any;
  callback: (args?: any) => void;
  elementCallback: (...args: any[]) => void;
  objectCallback: (args?: any) => void;
  useCapture: boolean;
}

export interface IEventRecordsByName {
  [eventName: string]: IEventRecordList;
}

export interface IEventRecordList {
  [id: string]: IEventRecord[] | number;
  count: number;
}

export interface IDeclaredEventsByName {
  [eventName: string]: boolean;
}

export class EventGroup {
  private static _uniqueId = 0;
  private _parent;
  private _eventRecords: IEventRecord[];
  private _id = EventGroup._uniqueId++;
  private _isDisposed: boolean;

  public static raise(
    target: any,
    eventName: string,
    eventArgs?: any,
    bubbleEvent?: boolean
  ) {
    let retVal;

    if (EventGroup._isElement(target)) {
      if (document.createEvent) {
        let ev = document.createEvent('HTMLEvents');

        ev.initEvent(eventName, bubbleEvent, true);
        ev['args'] = eventArgs;
        retVal = target.dispatchEvent(ev);
      } else if (document['createEventObject']) {
        let evObj = document['createEventObject'](eventArgs);
        target.fireEvent('on' + eventName, evObj);
      }
    } else {
      while (target && retVal !== false) {
        let events = <IEventRecordsByName>target.__events__;
        let eventRecords = events ? events[eventName] : null;

        for (let id in eventRecords) {
          if (eventRecords.hasOwnProperty(id)) {
            let eventRecordList = <IEventRecord[]>eventRecords[id];

            for (let listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
              let record = eventRecordList[listIndex];

              if (record.objectCallback) {
                retVal = record.objectCallback.call(record.parent, eventArgs);
              }
            }
          }
        }
        target = bubbleEvent ? target.parent : null;
      }
    }

    return retVal;
  }

  public static isObserved(target: any, eventName: string): boolean {
    let events = target && <IEventRecordsByName>target.__events__;

    return !!events && !!events[eventName];
  }

  public static isDeclared(target: any, eventName: string): boolean {
    let declaredEvents = target && <IDeclaredEventsByName>target.__declaredEvents;

    return !!declaredEvents && !!declaredEvents[eventName];
  }

  public static stopPropagation(event: any) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else { // IE8
      event.cancelBubble = true;
    }
  }

  private static _isElement(target: HTMLElement) {
    return !!target && (target.addEventListener || target instanceof HTMLElement);
  }

  public constructor(parent: any) {
    this._parent = parent;
    this._eventRecords = [];
  }

  public dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;

      this.off();
      this._parent = null;
    }
  }

  public onAll(target: any, events: { [key: string]: (args?: any) => void; }, useCapture?: boolean) {
    for (let eventName in events) {
      if (events.hasOwnProperty(eventName)) {
        this.on(target, eventName, events[eventName], useCapture);
      }
    }
  }

  public on(target: any, eventName: string, callback: (args?: any) => void, useCapture?: boolean) {
    if (eventName.indexOf(',') > -1) {
      let events = eventName.split(/[ ,]+/);

      for (let i = 0; i < events.length; i++) {
        this.on(target, events[i], callback, useCapture);
      }
    } else {
      let parent = this._parent;
      let eventRecord: IEventRecord = {
        target: target,
        eventName: eventName,
        parent: parent,
        callback: callback,
        objectCallback: null,
        elementCallback: null,
        useCapture: useCapture
      };

      let events = <IEventRecordsByName>(target.__events__ = target.__events__ || {});
      events[eventName] = events[eventName] || <IEventRecordList>{
        count: 0
      };
      events[eventName][this._id] = events[eventName][this._id] || [];
      (<IEventRecord[]>events[eventName][this._id]).push(eventRecord);
      events[eventName].count++;

      if (EventGroup._isElement(target)) {
        let processElementEvent = (...args: any[]) => {
          if (this._isDisposed) {
            return;
          }

          let result;
          try {
            result = callback.apply(parent, args);
            if (result === false && args[0]) {
              let e = args[0];

              if (e.preventDefault) {
                e.preventDefault();
              }

              if (e.stopPropagation) {
                e.stopPropagation();
              }

              e.cancelBubble = true;
            }
          } catch (e) {
            /* ErrorHelper.log(e); */
          }

          return result;
        };

        eventRecord.elementCallback = processElementEvent;

        if (target.addEventListener) {
          (<EventTarget>target).addEventListener(eventName, processElementEvent, useCapture);
        } else if (target.attachEvent) {
          target.attachEvent('on' + eventName, processElementEvent);
        }
      } else {
        let processObjectEvent = (...args: any[]) => {
          if (this._isDisposed) {
            return;
          }

          return callback.apply(parent, args);
        };

        eventRecord.objectCallback = processObjectEvent;
      }

      this._eventRecords.push(eventRecord);
    }
  }

  public off(target?: any, eventName?: string, callback?: (args?: any) => void, useCapture?: boolean) {
    for (let i = 0; i < this._eventRecords.length; i++) {
      let eventRecord = this._eventRecords[i];
      if ((!target || target === eventRecord.target) &&
        (!eventName || eventName === eventRecord.eventName) &&
        (!callback || callback === eventRecord.callback) &&
        ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
        let events = <IEventRecordsByName>eventRecord.target.__events__;
        let targetArrayLookup = events[eventRecord.eventName];
        let targetArray = targetArrayLookup ? <IEventRecord[]>targetArrayLookup[this._id] : null;

        if (targetArray) {
          if (targetArray.length === 1 || !callback) {
            targetArrayLookup.count -= targetArray.length;
            delete events[eventRecord.eventName][this._id];
          } else {
            targetArrayLookup.count--;
            targetArray.splice(targetArray.indexOf(eventRecord), 1);
          }

          if (!targetArrayLookup.count) {
            delete events[eventRecord.eventName];
          }
        }

        if (eventRecord.elementCallback) {
          if (eventRecord.target.removeEventListener) {
            eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
          } else if (eventRecord.target.detachEvent) { // IE8
            eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
          }
        }

        this._eventRecords.splice(i--, 1);
      }
    }
  }

  public raise(eventName: string, eventArgs?: any, bubbleEvent?: boolean): any {
    return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
  }

  public declare(event: any) {
    let declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};

    if (typeof event === 'string') {
      declaredEvents[event] = true;
    } else {
      for (let i = 0; i < event.length; i++) {
        declaredEvents[event[i]] = true;
      }
    }
  }
}
