import { Partition } from '../../../models';

export interface IDisksInformationProps {
    diskInformation: Array<Partition>;
    className?: string;
}

export interface IDisksInformationState {
    tooltipShow: boolean;
}
