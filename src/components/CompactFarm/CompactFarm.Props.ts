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
  onGroupEdit?: (groupId: any) => void;
  onGroupDelete?: (groupId: any) => void;
  onAddToGroup?: (groupId: any) => void;
  onServerRoleEdit?: (serverId: any, farmId: any, event?: any) => void;
  onServerClose?: (serverId: string, groupId: any, event?: any) => void;
  hoverMessageForCriticalOrWarningServer?: string;
}

