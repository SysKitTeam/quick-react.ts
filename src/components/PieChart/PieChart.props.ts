export interface IPieChartProps {
    driveLetter: string;
    text: string;
    width: number;
    height: number;
    data: IPieChartData[];
}

export interface IPieChartData {
    label: string;
    value: number;
}
