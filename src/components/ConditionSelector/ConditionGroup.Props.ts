import { ConditionDefinition, ConditionRowState } from './';

export enum LogicalOperatorTypeEnum {
    None = -1,
    And = 0,
    Or,
    Empty = 1000
}

export class ExpressionDefinitionTree {
    id: string;
    logicalOperator: LogicalOperatorTypeEnum;
    conditionDefinition?: ConditionDefinition;
    subExpressions?: ExpressionDefinitionTree[];    
    isOver?: any;    
    connectDropTarget?: any;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    logicalOperatorChanged?: (id: string, logicalOperator: LogicalOperatorTypeEnum) => void;
    compareConditionChanged?: (conditionRowState: ConditionRowState) => void;
}
