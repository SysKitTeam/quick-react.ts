import * as React from 'react';
import { ICompactServerProps } from '../CompactServer/CompactServer.Props';
import { IGroup } from '../../models';

export interface ICompactFarmProps {
  farm: IGroup;
  filter?: string;
  iconName?: string;
  iconTitle?: string;
  serverOnClick?: (groupId: any, serverId: any) => void;
  groupOnClick?: (groupId: any) => void;
  showEditRoles?: boolean;
  editGroup?: (groupId: any) => void;
  serverRoleEdit?: (event: any, serverFQDN: any, farmId: any) => void;
  onServerClose?: (serverId: string, groupId: any, event?: any) => void;
}

