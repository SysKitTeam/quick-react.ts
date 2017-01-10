import * as React from 'react';
import { IBreadcrumbsProps, IBreadcrumbItem } from './Breadcrumbs.Props';
export interface IBreadcrumbState {
    isOverflowOpen: boolean;
    overflowAnchor?: HTMLElement;
    renderedItems?: IBreadcrumbItem[];
    renderedOverflowItems?: IBreadcrumbItem[];
}
export declare class Breadcrumbs extends React.Component<IBreadcrumbsProps, any> {
    static defaultProps: IBreadcrumbsProps;
    refs: {
        [key: string]: React.ReactInstance;
        renderingArea: HTMLElement;
    };
    private _breadcrumbItemWidths;
    private _id;
    constructor(props: any);
    componentDidMount(): void;
    renderedOverflowItems: any;
    renderedItems: any;
    componentWillReceiveProps(nextProps: IBreadcrumbsProps): void;
    componentDidUpdate(prevProps: IBreadcrumbsProps, prevStates: IBreadcrumbState): void;
    render(): JSX.Element;
    private _onOverflowClicked(ev);
    private _onOverflowDismissed(ev);
    private _onBreadcrumbClicked(item, ev);
    private _updateItemMeasurements();
    private _updateRenderedItems();
    private _getStateFromProps(nextProps);
}
