import * as React from 'react';
import {ICompactServerProps} from '../CompactServer/CompactServer.Props';
import {ISharePointServer, IHazMeasures, IFarm} from '../../models';

export interface ICompactDashboardServer extends ISharePointServer, IHazMeasures {
}

export interface ICompactDashboardFarm extends IFarm {
    servers: Array<ICompactDashboardServer>;
}

export interface ICompactDashboardProps {
  title: string;
  farms: Array<ICompactDashboardFarm>;
  className?: string;
  filter?: string;
  isVertical?: boolean;

  /**
  * Action that is called on clicking the add icon on the bar of a certain group. The function is supplied with a group id.
  */
  groupAddFunc?: (groupId: any) => void;
  
  /**
  * Action that is called on clicking the edit icon on the bar of a certain group. The function is supplied with a group id.
  */
  groupEditFunc?: (groupId: any) => void;


  /**
  * Action that is called on clicking the delete icon on the bar of a cetrain group. The function is supplied with a group id.
  */
  groupDeleteFunc?: (groupId: any) => void;

  /**
  * Action that is called on role change of a certain server of some farm. The function is supplied with server FQDN.
  */
  serverRoleEdit?: (serverFQDN: any) => void;

  /**
  * Action that is called on closing a certain server of some farm. The function is supplied with server FQDN.
  */
  serverClose?: (serverFQDN: any) => void;

  /**
  * Action that is called on clicking the title of a cetrain group. The function is supplied with a group id.
  */
  groupOnClick?: (groupId: any) => void;

  serverOnClick?: (serverId: any) => void;
}

