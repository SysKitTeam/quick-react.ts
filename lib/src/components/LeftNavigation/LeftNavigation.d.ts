import * as React from 'react';
import { ILeftNavigationProps, ILeftNavigationOption } from './LeftNavigation.Props';
export declare class LeftNavigation extends React.Component<ILeftNavigationProps, any> {
    constructor(props: any);
    onLeftNavigationClick(): void;
    onLinkClick(index: any): void;
    getSelectedIndex(options: ILeftNavigationOption[]): number;
    render(): JSX.Element;
}
