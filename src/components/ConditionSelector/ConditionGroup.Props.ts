import {ConditionDefinition} from './Condition.Props';

export enum LogicalOperatorTypeEnum {
    None = -1,
    And = 0,
    Or,
    Empty = 1000
}

export class ExpressionDefinitionTree {
    id: number;
    logicalOperator: LogicalOperatorTypeEnum;
    conditionDefinition?: ConditionDefinition;
    subExpressions?: ExpressionDefinitionTree[];    
    conditionDragged?: (dragSourceId: number, dragTargetId: number) => void;
    isOver?: any;    
    connectDropTarget?: any;

}
