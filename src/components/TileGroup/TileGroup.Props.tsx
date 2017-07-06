import { IGroup } from '../../models';

export interface ITileGroupProps {
    farm: IGroup;
    filter?: string;  
    iconName?: string;
    iconTitle?: string;
    groupOnClick?: (groupId: any) => void;
    serverOnClick?: (groupId: any, serverId: any) => void;
    editRoles?: boolean;
    serverRoleEdit?: (event: any, id: any, farmId: any) => any;
    editGroup?: (groupId: any) => void;
    onServerClose?: (serverId: any, groupId: any, event?: any) => void;
}
