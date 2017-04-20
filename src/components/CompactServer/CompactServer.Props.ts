import * as React from 'react';
import {ServerStatus, ISharePointServer} from '../../models';


/**
 * Compact server has all the properties as the basic implementation of ISharePointServer with the addition of a filter. 
 */
export interface ICompactServerProps extends ISharePointServer {
    filter?: string;
    serverOnClick?: (serverId: any) => void;
    onMouseEnter?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    onMouseLeave?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
}
