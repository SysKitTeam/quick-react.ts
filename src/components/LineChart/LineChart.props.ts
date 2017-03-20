export interface ILineChartProps {
    id: string;
    title?: string;
    width?: number;
    height?: number;
    xAxisTicks?: number;
    yAxisTicks?: number;
    data: ILineChartData[];
    dimensions: ILineChartDimensions;
    xAxisFormat?: () => string;
    className?: string;
}

export interface ILineChartData {
    argument: Date | number;
    value: number;
}

export interface ILineChartDimensions {
    width: string;
    height: string;
}
