import {IGroup, IGroupID} from './IGroup';
import {IServer} from './IServer';
import {IServerGroup} from './IServerGroup';
import {ISharePointServer} from './ISharePointServer';

export interface ISharePointVersion {
    version: string;
    icon?: string;
}

export interface IFarmID {
    sqlInstance: string;
    configDataBaseName: string;
    configDataBaseIcon: string;
}

export interface IFarm extends IGroup {
    id: IFarmID;
    isCustom: boolean;
    version: ISharePointVersion;
    serversGroup: IServerGroup;
    /**
     * Array of basic SharePoint servers. 
     */
    servers: Array<ISharePointServer>;
}


/**
 * Empty farm. Should be used for testing purposes. 
 */
export const emptyFarm : IFarm = {
    id: { sqlInstance: '', configDataBaseName: '', configDataBaseIcon: ''},
    isCustom: true,
    version: { version: ''},
    serversGroup: { name: '', icon: '' },
    name: '',
    servers: [] 
};
