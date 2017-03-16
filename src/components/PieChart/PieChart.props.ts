export interface IPieChartProps {
    id: string;
    title?: string;
    text?: string;
    data: IPieChartData[];
    colors?: Array<string>;
    tipText?: (d?: IPieChartData) => string;
    dimensions: Dimensions;
}

export interface IPieChartData {
    label: string;
    value: number;
    class?: string;
}

export interface Dimensions {
    width: string;
    height: string;
}
