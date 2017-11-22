export interface IProgressBarProps {
    title?: string;
    info?: string;
    data: IUsage;
    progressClass?: string;
    dimensions: IProgressBarDimensions;
    progressColor?: string;
    showTooltip?: boolean;
}

export interface IUsage {
    current: number;
    total: number;
}

export interface IProgressBarDimensions {
    height: string;
    width: string;
}
