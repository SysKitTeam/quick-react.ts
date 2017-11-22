import { ITreeviewItem } from '../Treeview';
import { ExpressionDefinitionTree, LogicalOperatorTypeEnum, ConditionRowState } from './';

export class ConditionSelectorPorps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: ExpressionDefinitionTree;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    logicalOperatorChanged?: (id: string, logicalOperator: LogicalOperatorTypeEnum) => void;
    compareConditionChanged?: (conditionRowState: ConditionRowState) => void;
    conditionListSelectionChanged?: (treeListId: string, itemsId?: string[], checked?: boolean) => void;
}

export class ConditionSelectorContainerProps {
    conditionSelectorProps: ConditionSelectorPorps;
    onDragDrop?: (newTree: ExpressionDefinitionTree) =>  void;
}


