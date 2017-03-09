export interface IPieChartProps {
    id: string;
    title?: string;
    text?: string;
    width: number;
    height: number;
    data: IPieChartData[];
    colors?: Array<string>;
    tipText?: (d?: IPieChartData) => string;
}

export interface IPieChartData {
    label: string;
    value: number;
    class?: string;
}
