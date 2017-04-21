import * as React from 'react';
import { LeftNavigation } from './LeftNavigation';

export interface ILeftNavigationProps extends React.Props <any> {
    id ?: string;
    options ?:  ILeftNavigationOption[];
    className ?: string;
    onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: ILeftNavigationOption) => void;
    otherOptions ?: ILeftNavigationOption[];
}

export interface ILeftNavigationOption extends React.Props <any> {
    id : string;
    text : string;
    href ?: string;
    icon ?: string;
    selected ?: boolean;
    disabled ?: boolean;
}
