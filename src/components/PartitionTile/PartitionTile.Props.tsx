import { IPartitionUsage } from '../DetailedServerTile/DetailedServerTile.Props';

export interface IPartitionTileProps {
    usage: IPartitionUsage;
    className?: string;
    criticalColor?: string;
    warningColor?: string;
    okColor?: string;
}
