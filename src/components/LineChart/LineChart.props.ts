export interface IChartProps {
    title: string;
    width: number;
    height: number;
    gridSize?: number;
    data: IChartData[];
}

export interface IChartData {
    time: Date;
    value: number;
}
