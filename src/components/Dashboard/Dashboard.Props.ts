import * as React from 'react';
import {ICompactServerProps} from '../CompactServer/CompactServer.Props';

export interface IFarm {
  farmId: any;
  farmName: string;
  servers: Array<ICompactServerProps>;
}

export interface IDashboardProps {
  title: string;
  farms: Array<IFarm>;
}

