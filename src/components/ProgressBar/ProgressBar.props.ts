export interface IProgressBarProps {
    title: string;
    width: number;
    height: number;
    info?: string;
    data: IUsage;
    progressClass?: string;
}

export interface IUsage {
    current: number;
    total: number;
}
