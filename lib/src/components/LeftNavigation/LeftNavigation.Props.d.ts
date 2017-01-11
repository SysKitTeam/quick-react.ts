import * as React from 'react';
export interface ILeftNavigationProps extends React.Props<any> {
    id?: string;
    options?: ILeftNavigationOption[];
    className?: string;
}
export interface ILeftNavigationOption extends React.Props<any> {
    id: string;
    text: string;
    href?: string;
    icon?: string;
    selected?: boolean;
    disabled?: boolean;
}
