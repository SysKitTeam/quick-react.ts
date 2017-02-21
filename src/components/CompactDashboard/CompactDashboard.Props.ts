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
}

