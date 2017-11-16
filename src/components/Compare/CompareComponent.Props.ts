import { GridColumn } from '../QuickGrid/QuickGrid.Props';
export interface ICompareComponentState {
    columnWidths: Array<number>;
    equalFilter: boolean;
    diffFilter: boolean;
    missingFilter: boolean;
}

export interface ICompareComponentProp {
    sourceRows: Array<any>;
    targetRows: Array<any>;
    columns: Array<GridColumn>;
    differences: Array<CompareDifference>;
}

export interface CompareDifference {
    rowIndex : number;
    columnIndex? : Array<number>;
    differenceType : CompareDifferenceType;
}

export enum CompareDifferenceType {
    NotEqual,
    MissingInSource,
    MissingInTarget
}
