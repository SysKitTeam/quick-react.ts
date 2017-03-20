export interface IBarChartProps {
    id: string;
    data: Array<IBarChartData>;
    tipText?: (data: IBarChartData) => string;
    xAxisFormat?: () => string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: (d: IBarChartData) => void;
    dimensions: IBarChartDimensions;
    selectedIndex?: number;
}

export interface IBarChartData {
    argument: any;
    frequency: number;
}

export interface IBarChartDimensions {
    width: string;
    height: string;
}
