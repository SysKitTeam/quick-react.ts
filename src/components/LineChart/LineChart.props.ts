export interface ILineChartProps {
    id: string;
    title?: string;
    width?: number;
    height?: number;
    gridSize?: number;
    data: ILineChartData[];
    xAxisScale: string; // 'LINEAR' or 'TIME' 
}

export interface ILineChartData {
    argument: Date | number;
    value: number;
}
