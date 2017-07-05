import {IServer} from './IServer';
import { IServerGroup } from './IServerGroup';

export enum GroupTypeEnum {
    SharePoint = 1,
    Sql = 2,
    SqlAlwaysOn = 3,
    Custom = 4
}


export interface IGroup {
    id: string;
    name: string;
    servers: Array<IServer>;
    type: GroupTypeEnum;
}
