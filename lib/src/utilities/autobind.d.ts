export declare function autobind<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): {
    configurable: boolean;
    get(): any;
    set(newValue: any): void;
};
