import * as React from 'react';
import {ICompactServerProps} from '../CompactServer/CompactServer.Props';

export interface IFarm {
  farmId: any;
  isCustom: boolean;
  sharepointVersion: string;
  sharepointVersionIcon: string;
  configDB: string;
  confgiDBIcon: string;
  farmName: string;
  servers: Array<ICompactServerProps>;
}

export interface ICompactDashboardProps {
  title: string;
  height?: number;
  width?: number;
  farms: Array<IFarm>;
  className?: string;
  filter?: string;
  isVertical?: boolean;

  openGroup?: (groupId: any) => void; 

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
}

