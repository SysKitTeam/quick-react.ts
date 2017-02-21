export interface IPieChartProps {
    title: string;
    text: string;
    width: number;
    height: number;
    data: IPieChartData[];
}

export interface IPieChartData {
    label: string;
    value: number;
    text?: string;
    class?: string;
}
