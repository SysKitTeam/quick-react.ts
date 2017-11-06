export interface ICustomDateRangeProps {
    className?: string;
    isDialogOpen: boolean;
    startDate?: Date;
    endDate?: Date;
    onSave?: () => void;
    onDialogClose?: () => void;
}

export interface ICustomDateRangeState {
    startDate?: Date;
    endDate?: Date;
    currentSelectedCustomDateStartTime?: Date;
    currentSelectedCustomDateEndTime?: Date;
    invalidDateRangeSelected?: boolean;
}