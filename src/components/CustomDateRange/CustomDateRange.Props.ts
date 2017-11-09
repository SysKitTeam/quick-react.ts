export interface ICustomDateRangeProps {
    isDialogOpen: boolean;
    startDate: Date;
    endDate: Date;
    className?: string;
    onSave?: (startDate: Date, endDate: Date) => void;
    onClose?: () => void;
}

export interface ICustomDateRangeState {
    startDate?: Date;
    endDate?: Date;
    validDateRangeSelected?: boolean;
}