import * as React from 'react';
import { LeftNavigation } from './LeftNavigation';
import { IconName } from '../../components/Icon/IconName';

export interface ILeftNavigationProps extends React.Props <any> {
    id ?: string;
    options ?:  ILeftNavigationOption[];
    className ?: string;
}

export interface ILeftNavigationOption extends React.Props <any> {
    id : string;
    text : string;
    href ?: string;
    icon ?: IconName;
    selected ?: boolean;
    disabled ?: boolean;
}