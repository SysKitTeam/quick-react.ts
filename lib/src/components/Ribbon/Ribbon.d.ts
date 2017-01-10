import * as React from 'react';
import { IRibbonProps } from './Ribbon.Props';
import { IContextualMenuItem } from '../ContextualMenu/ContextualMenu.Props';
export interface ICommandBarState {
    renderedItems?: IContextualMenuItem[];
    renderedOverflowItems?: IContextualMenuItem[];
    expandedMenuItemKey?: string;
    expandedMenuId?: string;
    contextualMenuItems?: IContextualMenuItem[];
    contextualMenuTarget?: HTMLElement;
    renderedFarItems?: IContextualMenuItem[];
}
export declare class Ribbon extends React.Component<IRibbonProps, ICommandBarState> {
    static defaultProps: {
        items: any[];
        overflowItems: any[];
        farItems: any[];
    };
    refs: {
        [key: string]: React.ReactInstance;
        commandSurface: HTMLElement;
        farCommandSurface: HTMLElement;
        commandBarRegion: HTMLElement;
        searchSurface: HTMLElement;
    };
    private _id;
    private _overflowWidth;
    private _commandItemWidths;
    private _events;
    constructor(props: IRibbonProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: IRibbonProps): void;
    componentDidUpdate(prevProps: IRibbonProps, prevStates: ICommandBarState): void;
    render(): JSX.Element;
    private _renderItemInCommandBar(item, index, expandedMenuItemKey, isFarItem?);
    private _renderIcon(item);
    private _updateItemMeasurements();
    private _updateRenderedItems();
    private _onItemClick(ev, item);
    private _onOverflowClick(ev);
    private _onContextMenuDismiss(ev?);
    private _getStateFromProps(nextProps);
}
