import * as React from 'react';
import { IDetailedServerProps } from '../DetailedServerTile/DetailedServerTile.Props';
import { IGroup, IServer, GroupTypeEnum } from '../../models';

export interface IDetailedServerGroupProps {
  id: string;
  name: string;
  servers: Array<IServer>;
  filter: string;
  iconName: string;
  serverOnClick?: (groupId: any, serverId: any) => void;
}
