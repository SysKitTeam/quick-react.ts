export interface ILineChartProps {
    id: string;
    title?: string;
    width?: number;
    height?: number;
    ticks?: number;
    data: ILineChartData[];
}

export interface ILineChartData {
    argument: Date | number;
    value: number;
}
