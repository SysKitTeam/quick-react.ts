import { ServerStatus } from './ServerStatus';


export interface IServerId {}

export interface IServer {
    id: IServerId;
    name: string;
    status: ServerStatus;
    
    /**
     * Action called when closing action is initiated.
     */
    onClose?: (serverId?: IServerId) => void;
}
