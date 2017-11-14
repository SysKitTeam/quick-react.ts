import { IDropdownOption } from '../Dropdown/Dropdown.Props';

export enum LogicalOperatorTypeEnum {
    Null = -1,
    And = 0,
    Or,
    None = 1000
}

export enum PropertyTypeEnum {
    String = 0,
    Number,
    Enum,
    Boolean,
    DateTime,
    None   
}

export class ExpressionDefinitionTree {
    logicalOperator: LogicalOperatorTypeEnum;
    conditionDefinition?: ConditionDefinition;
    subExpressions?: ExpressionDefinitionTree[];
}

export class ConditionDefinition {    
    id: number;
    propertyName: string;
    propertyType?: PropertyTypeEnum;
    isHardcodedValue: boolean;
    classname?: string;
    conditionSelectionTypes?: IDropdownOption[];
    showStartLogialOperator?: boolean; // default true
    hasMultipleLogicalOperations?: boolean; // default true
    allowConditionDeletion?: boolean; // default true
    hasIndent?: boolean; // default false 
    indentSize?: number; // default 30
    conditionStateChanged?: (conditionState: ConditionDefinitionRowState) => void;
    additionalData?: any;
}

export class ConditionDefinitionRowState {
    id: number;
    propertyName: string;
    conditionSelectionType: IDropdownOption;
    addConditionClicked: boolean;
    removeConditionClicked: boolean;
}
