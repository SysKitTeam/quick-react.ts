import * as React from 'react';
import { EventGroup } from './EventGroup';
import { IDisposable } from './IDisposable';
import { Async } from './Async';
export declare class CommonComponent<P, S> extends React.Component<P, S> {
    private __async;
    private __events;
    private __disposables;
    private __resolves;
    protected readonly _async: Async;
    protected readonly _events: EventGroup;
    protected readonly _disposables: IDisposable[];
    protected _resolveRef(refName: string): (ref: any) => any;
}
