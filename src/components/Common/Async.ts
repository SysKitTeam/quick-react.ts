declare function setTimeout(cb: Function, delay: number): number;
declare function setInterval(cb: Function, delay: number): number;

export class Async {
  private _timeoutIds = null;
  private _immediateIds = null;
  private _intervalIds = null;
  private _animationFrameIds: { [id: number]: boolean } = null;
  private _isDisposed = false;
  private _parent: any;
  private _onErrorHandler: (e: any) => void;
  private _noop: any;

  constructor(parent?: any, onError?: (e: any) => void) {
    this._parent = parent || null;
    this._onErrorHandler = onError;
    this._noop = () => { /* do nothing */ };
  }

  public dispose() {
    let id;

    this._isDisposed = true;
    this._parent = null;

    if (this._timeoutIds) {
      for (id in this._timeoutIds) {
        if (this._timeoutIds.hasOwnProperty(id)) {
          this.clearTimeout(id);
        }
      }

      this._timeoutIds = null;
    }

    if (this._immediateIds) {
      for (id in this._immediateIds) {
        if (this._immediateIds.hasOwnProperty(id)) {
          this.clearImmediate(id);
        }
      }

      this._immediateIds = null;
    }

    if (this._intervalIds) {
      for (id in this._intervalIds) {
        if (this._intervalIds.hasOwnProperty(id)) {
          this.clearInterval(id);
        }
      }
      this._intervalIds = null;
    }

    if (this._animationFrameIds) {
      for (id in this._animationFrameIds) {
        if (this._animationFrameIds.hasOwnProperty(id)) {
          this.cancelAnimationFrame(id);
        }
      }

      this._animationFrameIds = null;
    }
  }

  public setTimeout(callback: () => void, duration: number): number {

    let timeoutId = 0;

    if (!this._isDisposed) {
      if (!this._timeoutIds) {
        this._timeoutIds = {};
      }

      timeoutId = setTimeout(
        () => {

          try {
            delete this._timeoutIds[timeoutId];
            callback.apply(this._parent);
          } catch (e) {
            if (this._onErrorHandler) {
              this._onErrorHandler(e);
            }
          }
        },
        duration);

      this._timeoutIds[timeoutId] = true;
    }

    return timeoutId;
  }

  public clearTimeout(id: number) {

    if (this._timeoutIds && this._timeoutIds[id]) {
      clearTimeout(id);
      delete this._timeoutIds[id];
    }
  }

  public setImmediate(callback: () => void): number {

    let immediateId = 0;

    if (!this._isDisposed) {
      if (!this._immediateIds) {
        this._immediateIds = {};
      }

      let setImmediateCallback = () => {

        try {
          delete this._immediateIds[immediateId];
          callback.apply(this._parent);
        } catch (e) {
          this._logError(e);
        }
      };

      immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);

      this._immediateIds[immediateId] = true;
    }

    return immediateId;
  }

  public clearImmediate(id: number) {

    if (this._immediateIds && this._immediateIds[id]) {
      window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
      delete this._immediateIds[id];
    }
  }

  public setInterval(callback: () => void, duration: number): number {
    let intervalId = 0;

    if (!this._isDisposed) {
      if (!this._intervalIds) {
        this._intervalIds = {};
      }

      intervalId = setInterval(
        () => {
          try {
            callback.apply(this._parent);
          } catch (e) {
            this._logError(e);
          }
        },
        duration);

      this._intervalIds[intervalId] = true;
    }

    return intervalId;
  }

  public clearInterval(id: number) {
    if (this._intervalIds && this._intervalIds[id]) {
      clearInterval(id);
      delete this._intervalIds[id];
    }
  }

  public throttle<T extends Function>(func: T, wait?: number, options?: {
    leading?: boolean;
    trailing?: boolean;
  }): T {

    if (this._isDisposed) {
      return this._noop;
    }

    let waitMS = wait || 0;
    let leading = true;
    let trailing = true;
    let lastExecuteTime = 0;
    let lastResult;
    let lastArgs: any[];
    let timeoutId: number = null;

    if (options && typeof (options.leading) === 'boolean') {
      leading = options.leading;
    }

    if (options && typeof (options.trailing) === 'boolean') {
      trailing = options.trailing;
    }

    let callback = (userCall?: boolean) => {
      let now = (new Date).getTime();
      let delta = now - lastExecuteTime;
      let waitLength = leading ? waitMS - delta : waitMS;
      if (delta >= waitMS && (!userCall || leading)) {
        lastExecuteTime = now;
        if (timeoutId) {
          this.clearTimeout(timeoutId);
          timeoutId = null;
        }
        lastResult = func.apply(this._parent, lastArgs);
      } else if (timeoutId === null && trailing) {
        timeoutId = this.setTimeout(callback, waitLength);
      }

      return lastResult;
    };

    let resultFunction: any = (...args: any[]) => {
      lastArgs = args;
      return callback(true);
    };

    return resultFunction;
  }

  public debounce<T extends Function>(func: T, wait?: number, options?: {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
  }): T {

    if (this._isDisposed) {
      return this._noop;
    }

    let waitMS = wait || 0;
    let leading = false;
    let trailing = true;
    let maxWait = null;
    let lastCallTime = 0;
    let lastExecuteTime = (new Date).getTime();
    let lastResult;
    let lastArgs: any[];
    let timeoutId: number = null;

    if (options && typeof (options.leading) === 'boolean') {
      leading = options.leading;
    }

    if (options && typeof (options.trailing) === 'boolean') {
      trailing = options.trailing;
    }

    if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
      maxWait = options.maxWait;
    }

    let callback = (userCall?: boolean) => {
      let now = (new Date).getTime();
      let executeImmediately = false;
      if (userCall) {
        if (leading && now - lastCallTime >= waitMS) {
          executeImmediately = true;
        }
        lastCallTime = now;
      }
      let delta = now - lastCallTime;
      let waitLength = waitMS - delta;
      let maxWaitDelta = now - lastExecuteTime;
      let maxWaitExpired = false;

      if (maxWait !== null) {
        if (maxWaitDelta >= maxWait && timeoutId) {
          maxWaitExpired = true;
        } else {
          waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
        }
      }

      if (delta >= waitMS || maxWaitExpired || executeImmediately) {
        if (timeoutId) {
          this.clearTimeout(timeoutId);
          timeoutId = null;
        }
        lastExecuteTime = now;
        lastResult = func.apply(this._parent, lastArgs);
      } else if ((timeoutId === null || !userCall) && trailing) {
        timeoutId = this.setTimeout(callback, waitLength);
      }

      return lastResult;
    };

    let resultFunction: any = (...args: any[]) => {
      lastArgs = args;
      return callback(true);
    };

    return resultFunction;
  }

  public requestAnimationFrame(callback: () => void): number {
    let animationFrameId = 0;

    if (!this._isDisposed) {
      if (!this._animationFrameIds) {
        this._animationFrameIds = {};
      }

      let animationFrameCallback = () => {
        try {
          delete this._animationFrameIds[animationFrameId];
          callback.apply(this._parent);
        } catch (e) {
          this._logError(e);
        }
      };

      animationFrameId = window.requestAnimationFrame ?
        window.requestAnimationFrame(animationFrameCallback) :
        window.setTimeout(animationFrameCallback, 0);

      this._animationFrameIds[animationFrameId] = true;
    }

    return animationFrameId;
  }

  public cancelAnimationFrame(id: number) {
    if (this._animationFrameIds && this._animationFrameIds[id]) {
      window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
      delete this._animationFrameIds[id];
    }
  }

  protected _logError(e: any) {
    if (this._onErrorHandler) {
      this._onErrorHandler(e);
    }
  }
}
