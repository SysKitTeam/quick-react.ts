import * as React from 'react';
import { IStatusBarProps } from './StatusBar.Props';
import './StatusBar.scss';
export declare class StatusBar extends React.Component<IStatusBarProps, any> {
    static defaultProps: IStatusBarProps;
    constructor(props: any);
    componentWillReceiveProps(newProps: IStatusBarProps): void;
    render(): JSX.Element;
}
