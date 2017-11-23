import { IGroup } from '../../models';

export interface ITileGroupProps {
    group: IGroup;
    filter?: string;
    iconName?: string;
    iconTitle?: string;
    groupOnClick?: (groupId: any) => void;
    serverOnClick?: (groupId: any, serverId: any) => void;
    onServerRoleEdit?: (id: any, farmId: any, event?: any) => any;
    onGroupEdit?: (groupId: any) => void;
    onGroupDelete?: (groupId: any) => void;
    onAddToGroup?: (groupId: any) => void;
    onServerClose?: (serverId: any, groupId: any, event?: any) => void;
    hoverMessageForCriticalOrWarningServer?: string;
}
