import { IServer } from '../../models';

export interface IHoverableCompactServerProps {
    server: IServer;
    className?: string;
    style: any;
    hoverMessageForCriticalOrWarningServer?: string;
    onRoleEdit?: (serverId: string, farmId: any) => void;
    serverOnClick?: (groupId: any, serverId: any) => void;
}

export interface IHoverableCompactServerState {
    showTooltip: boolean;
    targetHoverElement: HTMLElement;
}
