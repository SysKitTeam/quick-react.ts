import * as React from 'react';
import { IPopupProps } from './Popup.Props';
import { CommonComponent } from '../Common/Common';
export declare class Popup extends CommonComponent<IPopupProps, {}> {
    static defaultProps: IPopupProps;
    refs: {
        [key: string]: React.ReactInstance;
        root: HTMLElement;
    };
    private _originalFocusedElement;
    private _containsFocus;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onKeyDown(ev);
}
