import * as React from 'react';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';
import { IPivotItemProps } from '../Pivot/PivotItem.Props';

export interface IDashboardProps extends React.Props<any> {
    title: string;
    filter: string;
    activeView: ActiveDashboard;
    farms: ICompactDashboardProps;
    className?: string;
    height?: number;
    width?: number;
    pivotElements?: Array<IPivotItemProps>;    
    onChanged?: (newValue: any) => void;
}
