import * as React from 'react';
import {ICompactServerProps} from '../CompactServer/CompactServer.Props';
import {IFarm} from '../../models';

export interface ICompactDashboardProps {
  title: string;
  farms: Array<IFarm>;
  className?: string;
  filter?: string;
  isVertical?: boolean;
}

