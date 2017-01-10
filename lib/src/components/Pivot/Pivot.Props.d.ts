import * as React from 'react';
import { Pivot } from './Pivot';
import { PivotItem } from './PivotItem';
export interface IPivotProps extends React.Props<Pivot> {
    initialSelectedIndex?: number;
    initialSelectedKey?: string;
    onLinkClick?: (item?: PivotItem, ev?: React.MouseEvent) => void;
    linkFormat?: PivotLinkFormat;
}
export declare enum PivotLinkFormat {
    links = 0,
    tabs = 1,
}
