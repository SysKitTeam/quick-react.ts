import * as React from 'react';
import { IPivotProps } from './Pivot.Props';
import { IPivotItemProps } from './PivotItem.Props';
import './Pivot.scss';
export interface IPivotState {
    links: IPivotItemProps[];
    selectedKey: string;
    id: string;
}
export declare class Pivot extends React.Component<IPivotProps, IPivotState> {
    private _keyToIndexMapping;
    constructor(props: IPivotProps);
    componentWillReceiveProps(nextProps: IPivotProps): void;
    render(): JSX.Element;
    private _renderPivotLinks();
    private _renderLink(link);
    private _renderPivotItem();
    private _getPivotLinks(props);
    private _isKeyValid(itemKey);
    /**
    * Handles the onClick event on PivotLinks
    */
    private _onLinkClick(itemKey, ev);
    /**
     * Updates the state with the new selected index
     */
    private _updateSelectedItem(itemKey, ev?);
}
