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
    hasAddFarmButton?: boolean;
    addFarmIcon?: string;

    /**
     * Action that is invoked when user clicks on add farm button.
     */
    addFarm?: () => void;

    /**
     * Action that happens when the search input of the dashboard has changed it's value.
     * Default action exists on the dashboard.
     */
    onChanged?: (newValue: any) => void;

    /**
    * Action that is called on clicking the add icon on the bar of a certain group. The function is supplied with a group id.
    */
    groupAddFunc?: (groupId: any) => void;
     
    /**
    * Action that is called on clicking the edit icon on the bar of a certain group. The function is supplied with a group id.
    */
    groupEditFunc?: (groupId: any) => void;

    /**
    * Action that is called on clicking the delete icon on the bar of a cetrain group. The function is supplied with a group id.
    */
    groupDeleteFunc?: (groupId: any) => void;

    /**
     * Action that is called on role change of a certain server of some farm. The function is supplied with server FQDN.
     */
    serverRoleEdit?: (serverFQDN: any) => void;

    /**
     * Action that is called on closing a certain server of some farm. The function is supplied with server FQDN.
     */
    serverClose?: (serverFQDN: any) => void;
}
