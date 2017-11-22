import { IDropdownOption } from '../Dropdown/Dropdown.Props';

export enum PropertyTypeEnum {
    String = 0,
    Number,
    Enum,
    Boolean,
    DateTime,
    None   
}
export interface IConditionDefinition {    
    id: string;
    parentId?: string;
    propertyName: string;
    propertyType: PropertyTypeEnum;
    isHardcodedValue?: boolean;
    classname?: string;
    compareConditions?: IDropdownOption[];
    hasIndent?: boolean; // default false 
    indentSize?: number; // default 30
    compareConditionChanged?: (conditionRowState: IConditionRowState) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    additionalData?: any;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    connectDragSource?: any;
    isDragging?: any;
}

export interface IConditionRowState {
    propertyId: string;
    selectedCompareConditionKey: string | number;
}
