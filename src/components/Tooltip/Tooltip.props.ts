import { DirectionalHint } from '../../utilities/DirectionalHint';

export interface ITooltipProps {
    content: string;
    className?: string;
    targetElement?: HTMLElement;
    directionalHint?: DirectionalHint;
    onTooltipToggle?(isTooltipVisible: boolean): void;
}