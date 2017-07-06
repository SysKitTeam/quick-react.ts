import * as React from 'react';
import { ServerStatus, IServer, IRole } from '../../models';


/**
 * Compact server has all the properties as the basic implementation of ISharePointServer with the addition of a filter. 
 */
export interface ICompactServerProps {
    id: string;
    name: string;
    status: ServerStatus;
    roles: Array<IRole>;
    filter?: string;
    serverOnClick?: (serverId: any) => void;    
    onRoleEdit?: (serverId: string) => void;
    onClose?: (serverId: string, event?: any) => void;
    onMouseEnter?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    onMouseLeave?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    showEditRoles?: boolean;

    /**
     * On role edit event that is primary used in dashboard implementation.
     */
    roleEdit?: (event, id) => any;
}
