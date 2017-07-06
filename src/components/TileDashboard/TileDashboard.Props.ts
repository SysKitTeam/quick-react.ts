import * as React from 'react';
import { IGroup, GroupTypeEnum } from '../../models';

export interface ITileDashboardState {
    groups: Array<IGroup>;
}

export interface ITileDashboardProps {
    className: string;
    farms: Array<IGroup>;
    icons?: [{ iconType: GroupTypeEnum, iconName: string }];
    filter: string;
    editRoles?: boolean;
    singleGroupView?: boolean;
    
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
    serverRoleEdit?: (event: any, serverFQDN: any, farmId: any) => void;

    /**
     * Action that is called on closing a certain server of some farm. The function is supplied with server FQDN.
     */
    serverClose?: (serverId: any, groupId: any, event: any) => void;

    /**
     * Action that is called on clicking the title of a cetrain group. The function is supplied with a group id.
     */
    groupOnClick?: (groupId: any) => void;
    /**
    * Action is call when the server is clicked. The server ID is supplied.
    */
    serverOnClick?: (groupId: any, serverId: any) => void;
}
