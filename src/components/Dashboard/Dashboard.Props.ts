import * as React from 'react';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';
import { IGroup, GroupTypeEnum } from '../../models';
import { IPivotItemProps } from '../Pivot/PivotItem.Props';
import { IFilteringOption } from '../FilteringBar/FilteringBar.Props';
import { IDropdownOption } from '../Dropdown/Dropdown.Props';

export enum DashboardGroupingEnum {
    Smart = 0,
    Type = 1,
    Status = 2,
    Disabled = 3
}

export const defaultGroupingOptions: Array<IDropdownOption> = [
    {
        key: '0',
        text: 'Smart'
    },
    {
        key: '1',
        text: 'Type'
    },
    {
        key: '2',
        text: 'Status'
    },
    {
        key: '3',
        text: 'None'
    }
];

export interface IDashboardProps extends React.Props<any> {
    title: string;
    filter: string;
    initialActiveView: ActiveDashboard;
    onActiveViewChanged?: (activeView: ActiveDashboard) => void;
    onGroupViewChanged?: (activeGroupView: DashboardGroupingEnum) => void;
    hasAddButton?: boolean;
    headerClass?: string;
    activeFilters: Array<string>;
    initialActiveGrouping: DashboardGroupingEnum;
    hoverMessageForCriticalOrWarningServer?: string;

    icons: { iconName: string, iconType: GroupTypeEnum, iconTitle: string }[];
    /**
     * Message to be shown when there is no data present. can also be a JSX element
     */
    emptyDashboardMessage?: any;

    /**
     * Item that represents different available dashboards. Based on this the dashboard component will render different tabs.
     */
    differentDashboards?: { [id: number]: IPivotItemProps };

    farms: Array<IGroup>;

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
    onAddToGroup?: (groupId: any) => void;

    /**
    * Action that is called on clicking the edit icon on the bar of a certain group. The function is supplied with a group id.
    */
    onGroupEdit?: (groupId: any) => void;

    /**
    * Action that is called on clicking the delete icon on the bar of a cetrain group. The function is supplied with a group id.
    */
    onGroupDelete?: (groupId: any) => void;

    /**
    * Action that is called on clicking the title of a cetrain group. The function is supplied with a group id.
    */
    groupOnClick?: (groupId: any) => void;

    /**
    * Action that is called on role change of a certain server of some farm. The function is supplied with server FQDN.
    */
    onServerRoleEdit?: (serverId: any, farmId: any) => void;

    /**
    * Action that is called on closing a certain server of some farm. The function is supplied with server FQDN.
    */
    onServerClose?: (serverId: any, groupId) => void;
    /**
    * Action is call when the server is clicked. The server ID is supplied.
    */
    serverOnClick?: (groupId: any, serverId: any) => void;
    groupingOptions?: Array<IDropdownOption>;
}

export interface IDashboardState {
    groups: Array<IGroup>;
    filter: string;
    activeView: ActiveDashboard;
    grouping: DashboardGroupingEnum;
    filteringOptions: Array<IFilteringOption>;
}
