import * as React from 'react';
import { IMessageBarProps } from './MessageBar.Props';
export interface IMessageBarState {
    labelId?: string;
}
export declare class MessageBar extends React.Component<IMessageBarProps, IMessageBarState> {
    static defaultProps: IMessageBarProps;
    private ICON_MAP;
    constructor(props: IMessageBarProps);
    render(): JSX.Element;
    private _getIconSpan();
    private _getInnerTextClassName();
    private _getActionsDiv();
    private _getDismissDiv();
    private _getDontShowAgainDiv();
}
