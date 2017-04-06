import * as React from 'react';
import {IDetailedServerProps} from '../DetailedServerTile/DetailedServerTile.Props';
import {ISharePointServer, IHazMeasures, IFarm} from '../../models';

export interface IDetailedServerGroup extends IFarm {
    servers: Array<IDetailedServerProps>;
}

export interface IDetailedServerGroupProps {
  serverGroup: IDetailedServerGroup;
  filter?: string;
  serverOnClick?: (serverId: any) => void;
}
