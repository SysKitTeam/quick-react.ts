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
    maxWidth?: number;
    isResponsive?: boolean;
    onClick?: (d: IBarChartData) => void; 
}

export interface IBarChartData {
    argument: any;
    frequency: number;
}
