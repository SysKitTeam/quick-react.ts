import * as React from 'react';
import './ConditionSelector.scss';
import { Treeview } from '../Treeview/Treeview';
import { ITreeviewItem } from '../Treeview/TreeviewItem.Props';
import { ConditionDefinitionRowProps, PropertyTypeEnum } from './ConditionDefinitionRow.Props';
import { ConditionDefinitionRow} from './ConditionDefinitionRow';
import { TextField } from '../TextField/TextField';
import { Dropdown } from '../Dropdown/Dropdown';
import { DateTimeDropdownPicker } from '../DateTimeDropdownPicker/DateTimeDropdownPicker';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';

export class ConditionSelectorPorps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: ConditionDefinitionRowProps[];
}


export class ConditionSelector extends React.PureComponent <ConditionSelectorPorps, any> {

    render() {
        const {specialConditionsList, standardConditionsList, selectedConditions} = this.props;        
        return (
            <div className="condition-selector-container">
                <div className="selection-container">
                    <div className="conditions-title">
                        Select the condition(s) you want to apply
                    </div>
                    <div className="selection-inner-container">
                        {specialConditionsList &&
                            <Treeview
                                showCheckbox={true}                                                                    
                                items={ specialConditionsList }
                            />
                        }
                        {this.props.standardConditionsList &&
                            <div>
                                <Treeview
                                showCheckbox={true}
                                items={ standardConditionsList }
                            />
                            </div>
                        }
                    </div>
                </div>
                <div className="selection-container">
                    <div className="conditions-title">
                        Edit conditions 
                    </div>
                    <div className="selection-inner-container">
                        { selectedConditions && selectedConditions.length > 0 && selectedConditions.map((item, index) => {
                            return (<ConditionDefinitionRow key={index} { ...item }> {this.renderItem(item.propertyType, item.additionalData)} </ConditionDefinitionRow>);
                        })}
                    </div>
                </div>
            </div>
        );
    }
    
    private getConditionTypeValues = (item: ConditionDefinitionRowProps) => {
        if (!item.conditionSelectionTypes) {            
            switch (item.propertyType) {
                case PropertyTypeEnum.String: {             
                    break;
                }
                case PropertyTypeEnum.Number: {    
                    break; 
                }
                case PropertyTypeEnum.Enum: {
                    break;
                }
                case PropertyTypeEnum.DateTime: {
                    break;
                }
            }
        }
        return item.conditionSelectionTypes;
    }


    private renderItem = (propertyType: PropertyTypeEnum,  additionalData: any) => {
        switch (propertyType) {
            case PropertyTypeEnum.String: {
                return (
                    <TextField required={true} placeholder="Enter text value" />
                );                
            }
            case PropertyTypeEnum.Number: {
                return (
                    <TextField required={true} placeholder="Enter number value"  value={'0'} type={'number'} />
                );          
            }
            case PropertyTypeEnum.Boolean: {
                const booleanChoices = [{key: 1, text: 'True', selected: Boolean(additionalData)}, {key: 0, text: 'False', selected: !additionalData}];
                return (
                    <Dropdown 
                        showArrowIcon={false}
                        dropdownType={DropdownType.selectionDropdown}
                        options={booleanChoices}
                        hasTitleBorder={true}/>
                );
            }
            case PropertyTypeEnum.Enum: {
                return (
                    <Dropdown 
                        showArrowIcon={false}
                        dropdownType={DropdownType.selectionDropdown}
                        options={additionalData}
                        hasTitleBorder={true}/>
                );
            }
            case PropertyTypeEnum.DateTime: {
                return (
                    <DateTimeDropdownPicker
                        selectedDate={new Date()}  
                        includeTime={true}             
                    />
                );
            }
        }
    }
}
