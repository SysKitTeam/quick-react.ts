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
export declare class EventGroup {
    private static _uniqueId;
    private _parent;
    private _eventRecords;
    private _id;
    private _isDisposed;
    static raise(target: any, eventName: string, eventArgs?: any, bubbleEvent?: boolean): any;
    static isObserved(target: any, eventName: string): boolean;
    static isDeclared(target: any, eventName: string): boolean;
    static stopPropagation(event: any): void;
    private static _isElement(target);
    constructor(parent: any);
    dispose(): void;
    onAll(target: any, events: {
        [key: string]: (args?: any) => void;
    }, useCapture?: boolean): void;
    on(target: any, eventName: string, callback: (args?: any) => void, useCapture?: boolean): void;
    off(target?: any, eventName?: string, callback?: (args?: any) => void, useCapture?: boolean): void;
    raise(eventName: string, eventArgs?: any, bubbleEvent?: boolean): any;
    declare(event: any): void;
}
