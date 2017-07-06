import { IGroup } from '../../models';

export interface ITileGroupProps {
    farm: IGroup;
    filter?: string;  
    iconName?: string;
    groupOnClick?: (groupId: any) => void;
    serverOnClick?: (groupId: any, serverId: any) => void;
    editRoles?: boolean;
    serverRoleEdit?: (event: any, id: any, farmId: any) => any;
    editGroup?: (groupId: any) => void;
    serverClose?: (serverId: any, groupId: any, event?: any) => void;
}
