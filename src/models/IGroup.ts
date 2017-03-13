import {IServer} from './IServer';

export interface IGroupID {}

export interface IGroup {
    id: IGroupID;
    name: string;
    servers: Array<IServer>;
}
