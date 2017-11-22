import { ITreeviewItem } from '../Treeview';
import { IExpressionDefinitionTree, LogicalOperatorTypeEnum, IConditionRowState } from './';

export interface IConditionSelectorProps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: IExpressionDefinitionTree;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    logicalOperatorChanged?: (id: string, logicalOperator: LogicalOperatorTypeEnum) => void;
    compareConditionChanged?: (conditionRowState: IConditionRowState) => void;
    conditionListSelectionChanged?: (treeListId: string, itemsId?: string[], checked?: boolean) => void;
}

export interface IConditionSelectorContainerProps {
    conditionSelectorProps: IConditionSelectorProps;
    onDragDrop?: (newTree: IExpressionDefinitionTree) =>  void;
}


