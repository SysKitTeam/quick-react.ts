export interface ILineChartProps {
    id: string;
    title?: string;
    width?: number;
    height?: number;
    xAxisTicks?: number;
    yAxisTicks?: number;
    data: ILineChartData[];
}

export interface ILineChartData {
    argument: Date | number;
    value: number;
}
