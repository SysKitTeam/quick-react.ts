import { DirectionalHint } from '../../utilities/DirectionalHint';

export interface ITooltipProps {
    content: string;
    className?: string;
    targetElement?: HTMLElement;
    directionalHint?: DirectionalHint;
    showTooltip?: boolean;
    onTooltipToggle?(isTooltipVisible: boolean): void;
}