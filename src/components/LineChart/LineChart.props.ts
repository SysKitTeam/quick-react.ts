export interface ILineChartProps {
    id: string;
    title?: string;
    width?: number;
    height?: number;
    xAxisTicks?: number;
    yAxisTicks?: number;
    dimensions: ILineChartDimensions;
    xAxisFormat?: () => string;
    yAxisFormat?: (data: number) => string;
    className?: string;
    colorPallette?: Array<string>;
    yAxisDomain?: [any, any];
    series: Array<ISeriesData>;
}

export interface ILineChartData {
    argument: Date | number;
    value: number;
}

export interface ILineChartDimensions {
    width: string;
    height: string;
}

export interface ISeriesData {
    name: string;
    data: Array<ILineChartData>;
    className: string;
}
