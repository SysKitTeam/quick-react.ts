export interface IProgressBarProps {
    title: string;
    width: number;
    height: number;
    percentage: string;
    info?: string;
    data: IUsage;
    progressClass?: string;
}

export interface IUsage {
    current: number;
    total: number;
}