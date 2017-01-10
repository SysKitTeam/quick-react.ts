import * as React from 'react';
import { IButtonProps, IButton } from './Button.Props';
export declare class Button extends React.Component<IButtonProps, any> implements IButton {
    private _buttonElement;
    constructor(props: IButtonProps);
    render(): JSX.Element;
    focus(): void;
}
