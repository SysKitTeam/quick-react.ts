export declare class Async {
    private _timeoutIds;
    private _immediateIds;
    private _intervalIds;
    private _animationFrameIds;
    private _isDisposed;
    private _parent;
    private _onErrorHandler;
    private _noop;
    constructor(parent?: any, onError?: (e: any) => void);
    dispose(): void;
    setTimeout(callback: () => void, duration: number): number;
    clearTimeout(id: number): void;
    setImmediate(callback: () => void): number;
    clearImmediate(id: number): void;
    setInterval(callback: () => void, duration: number): number;
    clearInterval(id: number): void;
    throttle<T extends Function>(func: T, wait?: number, options?: {
        leading?: boolean;
        trailing?: boolean;
    }): T;
    debounce<T extends Function>(func: T, wait?: number, options?: {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }): T;
    requestAnimationFrame(callback: () => void): number;
    cancelAnimationFrame(id: number): void;
    protected _logError(e: any): void;
}
