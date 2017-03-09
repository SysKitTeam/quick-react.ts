export interface IBarChartProps {
    id: string;
    barColor?: string;
    hovColor?: string;
    data: Array<IBarChartData>;
    tipText?: (data: IBarChartData) => string;
    xAxisFormat?: () => string;
    width?: number;
    height?: number;
    minWidth?: number;
    className?: string;
    maxWidth?: number;
    onClick?: (d: IBarChartData) => void;
    dimensions: IBarChartDimensions;
}

export interface IBarChartData {
    argument: any;
    frequency: number;
}

export interface IBarChartDimensions {
    width: string;
    height: string;
}
