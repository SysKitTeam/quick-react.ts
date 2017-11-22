import { IConditionDefinition, IConditionRowState } from './';

export enum LogicalOperatorTypeEnum {
    None = -1,
    And = 0,
    Or,
    Empty = 1000
}

export interface IExpressionDefinitionTree {
    id: string;
    logicalOperator: LogicalOperatorTypeEnum;
    conditionDefinition?: IConditionDefinition;
    subExpressions?: IExpressionDefinitionTree[];    
    isOver?: boolean;    
    connectDropTarget?: any;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    logicalOperatorChanged?: (id: string, logicalOperator: LogicalOperatorTypeEnum) => void;
    compareConditionChanged?: (conditionRowState: IConditionRowState) => void;
}
