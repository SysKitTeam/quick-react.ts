import * as React from 'react';
import { ISharePointVersion, IFarmID } from '../../models';


export interface IGroupHeaderProps {
    version: ISharePointVersion;
    farmId: IFarmID;
    className?: string;
    isCustomFarm: boolean;
}
