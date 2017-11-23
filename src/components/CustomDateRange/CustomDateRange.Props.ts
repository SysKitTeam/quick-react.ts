export interface ICustomDateRangeProps {
    isDialogOpen: boolean;
    startDate: Date;
    endDate: Date;
    className?: string;
    invalidDateRangeSelected?: boolean;
    invalidErrorMessage?: string;
    onDateSelectionChanged?: (selectedStartDate: Date, selectedEndDate: Date) => void;
    onSave?: (startDate: Date, endDate: Date) => void;
    onClose?: () => void;
}

export interface ICustomDateRangeState {
    startDate?: Date;
    endDate?: Date;
    validDateRangeSelected?: boolean;
}