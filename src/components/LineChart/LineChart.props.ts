export interface IChartProps {
    title: string;
    width: number;
    height: number;
    gridSize?: number;
    data: IChartData[];
    xAxisScale: string; // 'LINEAR' or 'TIME' 
}

export interface IChartData {
    key: Date | number;
    value: number;
}
