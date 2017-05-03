export interface IPieChartProps {
    id?: string;
    data: Array<IPieChartData>;
    colors?: Array<string>;
    tipText?: (d?: IPieChartData) => string;
    dimensions: IPieChartDimensions;
    displayingElements?: number;
    showLegend?: boolean;
    sortValues?: boolean;
    tooltipBorderColor?: string;
}

export interface IPieChartContentProps {
    id: string;
    width: number;
    height: number;
    tipText?: (d?: IPieChartData) => string;
    colors?: Array<string>;
    data: Array<IPieChartData>;
    tooltipBorderColor?: string;
}

export interface IPieChartData {
    label: string;
    value: number;
    color?: string;
}

export interface IPieChartDimensions {
    width: string;
    height: string;
}
