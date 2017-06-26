import {IServer} from './IServer';

export enum GroupTypeEnum {
    SharePoint = 1,
    Sql = 2,
    SqlAlwaysOn = 3,
    Custom = 10
}


export interface IGroup {
    id: string;
    name: string;
    servers: Array<IServer>;
    type: GroupTypeEnum;
}
