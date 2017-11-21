import { IDropdownOption } from '../Dropdown/Dropdown.Props';

export enum PropertyTypeEnum {
    String = 0,
    Number,
    Enum,
    Boolean,
    DateTime,
    None   
}
export class ConditionDefinition {    
    id: string;
    parentId?: string;
    propertyName: string;
    propertyType: PropertyTypeEnum;
    isHardcodedValue?: boolean;
    classname?: string;
    compareConditions?: IDropdownOption[];
    hasIndent?: boolean; // default false 
    indentSize?: number; // default 30
    compareConditionChanged?: (conditionRowState: ConditionRowState) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    additionalData?: any;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    connectDragSource?: any;
    isDragging?: any;
}

export class ConditionRowState {
    propertyId: string;
    selectedCompareConditionKey: string | number;
}
