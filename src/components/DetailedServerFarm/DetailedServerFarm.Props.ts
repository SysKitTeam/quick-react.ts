import * as React from 'react';
import {IDetailedServerProps} from '../DetailedServerTile/DetailedServerTile.Props';
import {ISharePointServer, IHazMeasures, IFarm} from '../../models';

export interface IDetailedServerFarm extends IFarm {
    servers: Array<IDetailedServerProps>;
}

export interface IDetailedFarmProps {
  farm: IDetailedServerFarm;
  filter?: string;
  serverOnClick?: (serverId: any) => void;
}
