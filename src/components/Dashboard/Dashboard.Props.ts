import * as React from 'react';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';

export interface IDashboardProps {
    title: string;
    filter: string;
    activeView: ActiveDashboard;
    farms: ICompactDashboardProps;
    className?: string;
    height?: number;
    width?: number;
    onChanged?: (newValue: any) => void;
}
