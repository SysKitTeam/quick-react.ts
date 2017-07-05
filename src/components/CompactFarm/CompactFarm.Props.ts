import * as React from 'react';
import { ICompactServerProps } from '../CompactServer/CompactServer.Props';
import { IGroup } from '../../models';

export interface ICompactFarmProps {
  farm: IGroup;
  filter?: string;
  iconName?: string;
  serverOnClick?: (groupId: any, serverId: any) => void;
  groupOnClick?: (groupId: any) => void;
}

