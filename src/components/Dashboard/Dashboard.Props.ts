import * as React from 'react';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';
import { ITileDashboardProps } from '../TileDashboard/TileDashboard.Props';

export interface IDashboardProps {
    title: string;
    filter: string;
    activeView: ActiveDashboard;

    /**
     * Properties related to compact dashboard.
     */
    compact?: ICompactDashboardProps;
    
    /**
     * Properties related to tiled dashboard
     */
    tiles?: ITileDashboardProps;
    
}
