import { IRole } from '../../models/IRole';

export interface IServerHeaderProps {
    serverName: string;
    numberOfUsers?: string;
    roles: Array<IRole>;
}