import * as React from 'react';
import { IDetailedServerProps } from '../DetailedServerTile/DetailedServerTile.Props';
import { IGroup, IServer } from '../../models';

export interface IDetailedServerGroupProps {
  id: string;
  name: string;
  servers: Array<IServer>;
  filter: string;
  serverOnClick?: (groupId: any, serverId: any) => void;
}
