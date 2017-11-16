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
    id: number;
    propertyName: string;
    propertyType: PropertyTypeEnum;
    isHardcodedValue?: boolean;
    classname?: string;
    conditionSelectionTypes?: IDropdownOption[];
    hasMultipleLogicalOperations?: boolean; // default true
    allowConditionDeletion?: boolean; // default true
    hasIndent?: boolean; // default false 
    indentSize?: number; // default 30
    conditionStateChanged?: (conditionState: ConditionDefinitionRowState) => void;
    additionalData?: any;
    connectDragSource?: any;
    isDragging?: any;
}

export class ConditionDefinitionRowState {
    id: number;
    propertyName: string;
    conditionSelectionType: IDropdownOption;
    addConditionClicked: boolean;
    removeConditionClicked: boolean;
}
