import * as React from 'react';
import { IGroup, GroupTypeEnum } from '../../models';
import { IFilteringOption } from '../FilteringBar/FilteringBar.Props';

export interface ITileDashboardState {
    groups: Array<IGroup>;
}

export interface ITileDashboardProps {
    className: string;
    farms: Array<IGroup>;
    icons?: [{ iconType: GroupTypeEnum, iconName: string }];
    filter: string;
    singleGroupView?: boolean;
    filteringOptions?: Array<IFilteringOption>;

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
     * Action that is called on role change of a certain server of some farm. The function is supplied with server FQDN.
     */
    onServerRoleEdit?: (serverId: any, farmId: any, event?: any) => void;

    /**
     * Action that is called on closing a certain server of some farm. The function is supplied with server FQDN.
     */
    onServerClose?: (serverId: any, groupId: any, event: any) => void;

    /**
     * Action that is called on clicking the title of a cetrain group. The function is supplied with a group id.
     */
    groupOnClick?: (groupId: any) => void;
    /**
    * Action is call when the server is clicked. The server ID is supplied.
    */
    serverOnClick?: (groupId: any, serverId: any) => void;
}
