import * as React from 'react';
export interface IBreadcrumbsProps extends React.Props<any> {
    items: IBreadcrumbItem[];
    className?: string;
    maxDisplayedItems?: number;
}
export interface IBreadcrumbItem extends React.Props<any> {
    key: string;
    text: string;
    href?: string;
    onClick?: (ev?: React.MouseEvent, item?: IBreadcrumbItem) => void;
    children?: IBreadcrumbItem[];
}
