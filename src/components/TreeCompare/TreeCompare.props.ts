import { GridColumn } from '../QuickGrid';
import { TreeDataSource, IFinalTreeNode, TreeNode } from '../..';
import { compareResultFactory } from './CompareResultRenderer';

export enum CompareResultEnum {
    Equal = 0,
    Different = 1,
    DifferenceInChildren = 2,
    MissingInSource = 3,
    MissingInTarget = 4,
    MissingInBoth = 5
}

export interface ICompareResult extends TreeNode {
    compareResult: CompareResultEnum;
    sourceValue: string;
    targetValue: string;
    propertyValue: string;
}

export interface ITreeCompareState {
    dataSource: TreeDataSource;
    compareColumns: Array<GridColumn>;
}

export interface ITreeCompareProps {
    columns: Array<string>;
    rows: Array<ICompareResult>;
}

export const treeCompareColumns: Array<GridColumn> = [
    {
        headerText: '',
        valueMember: 'propertyValue',
        width: 100,
        minWidth: 100
    },
    {
        headerText: '',
        valueMember: 'sourceValue',
        width: 100,
        minWidth: 100
    },
    {
        headerText: '',
        valueMember: 'compareResult',
        width: 100,
        minWidth: 100,
        cellFormatter: (cellData: CompareResultEnum, rowData: any) => {
            return compareResultFactory(cellData);
        }
    },
    {
        headerText: '',
        valueMember: 'targetValue',
        width: 100,
        minWidth: 100
    }
];
