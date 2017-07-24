import { IServer } from '../../models';

export interface IHoverableCompactServerProps {
    server: IServer;
    className?: string;
    style: any;
    onRoleEdit?: (serverId: string, farmId: any) => void;
}

export interface IHoverableCompactServerState {
    showTooltip: boolean;
    targetHoverElement: HTMLElement;
}
