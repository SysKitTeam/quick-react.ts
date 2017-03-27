import * as React from 'react';
import {ICompactServerProps} from '../CompactServer/CompactServer.Props';
import {ISharePointServer, IHazMeasures, IFarm} from '../../models';

export interface ICompactDashboardServer extends ISharePointServer, IHazMeasures {
}

export interface ICompactDashboardFarm extends IFarm {
    servers: Array<ICompactDashboardServer>;
}

export interface ICompactFarmProps {
  farm: ICompactDashboardFarm;
  filter?: string;
  serverOnClick?: (serverId: any) => void;
}

