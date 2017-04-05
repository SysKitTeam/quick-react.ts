import * as React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export interface IBreadcrumbsProps extends React.Props<any> {
    items: IBreadcrumbItem[];
    className?: string;
    url: string;
}

export interface IBreadcrumbItem extends React.Props<any> {
    key: string;
    displayName: string;
    href?: string;
    onClick?: (ev?: React.MouseEvent<any>, item?: IBreadcrumbItem) => void;
    children?: IBreadcrumbItem[];
}
