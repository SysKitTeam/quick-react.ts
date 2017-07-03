import {IServer} from './IServer';
import { IServerGroup } from './IServerGroup';

export interface IGroupID {}

export interface IGroup {
    id: IGroupID;
    name: string;
    servers: Array<IServer>;
    serversGroup: IServerGroup;
}
