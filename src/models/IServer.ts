import { ServerStatus } from './ServerStatus';
import { IRole } from './IRole';
import { IMeasure } from './Measures';
import { IMemoryUsage , IPartitionUsage, IProcessorUsage} from '../components/DetailedServerTile/';

export interface IServer {
    id: string;
    name: string;
    status: ServerStatus;    
    measures: Array<IMeasure>;
    roles?: Array<IRole>;
    numberOfUsers?: string;
    hasCloseButton?: boolean;
    memoryUsage?: IMemoryUsage;
    partitionUsages?: Array<IPartitionUsage>;
    processorUsage?: IProcessorUsage;

    /**
     * Action called when closing action is initiated.
     */
    onClose?: (serverId?: string) => void;

    /**
     * Action triggered when role editing is initiated.
     */
    onRoleEdit?: (serverId: string) => void;

    /**
     * Action triggered after role change has been made.
     */
    onRoleChange?: (serverId: string) => void;
}
