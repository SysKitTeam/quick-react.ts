import { IServer } from '../../models';

export interface IHoverableCompactServerProps {
    server: IServer;
    className?: string;
    style: any;
}

export interface IHoverableCompactServerState {
    showTooltip: boolean;
    targetHoverElement: HTMLElement;
}
