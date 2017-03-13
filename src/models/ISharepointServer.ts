import {IServer, IServerId} from './IServer';
import {IRole} from './IRole';

export interface ISharePointServerId extends IServerId {
    FQDN: string;
}

export interface ISharePointServer extends IServer {
    id: ISharePointServerId;
    roles: Array<IRole>;
    
    /**
     * Action triggered when role editing is initiated.
     */
    onRoleEdit?: (serverId: ISharePointServerId) => void;
    
    /**
     * Action triggered after role change has been made.
     */
    onRoleChange?: (serverId: ISharePointServerId) => void;
}
