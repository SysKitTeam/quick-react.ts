import { IGroup } from '../../models';

export interface ITileGroupProps {
    farm: IGroup;
    filter?: string;  
    iconName?: string;
    groupOnClick?: (groupId: any) => void;
    serverOnClick?: (groupId: any, serverId: any) => void;
}
