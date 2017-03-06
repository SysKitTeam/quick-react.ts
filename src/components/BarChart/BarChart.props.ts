export interface IBarChartProps {
    id: string;
    barColor: string;
    hovColor?: string;
    data: Array<IBarChartData>;
}

export interface IBarChartData {
    argument: any;
    frequency: number;
}
