import * as React from 'react';
import './Condition.scss';
import * as classNames from 'classnames';
import { IConditionRowState, IConditionDefinition, PropertyTypeEnum } from './';
import { Dropdown, DropdownType, IDropdownOption } from '../Dropdown';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { DateTimeDropdownPicker } from '../DateTimeDropdownPicker/DateTimeDropdownPicker';
import { DragSource } from 'react-dnd';

const conditionSource = {
    beginDrag(props) {
        return {};
    },
    endDrag(props, monitor, component) {
        const dropTarget = monitor.getDropResult();
        if (Boolean(props) && Boolean(dropTarget) && component.props.conditionDragged) {
            component.props.conditionDragged(props, dropTarget);
        }
        return {};
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

@DragSource('condition', conditionSource, collectSource)
export class Condition extends React.PureComponent <IConditionDefinition, {}> {
    public static defaultProps = {
        hasIndent: false,
        indentSize: 30,
        isHardcodedValue: false
    };

    compareConditionChanged = (option: IDropdownOption, index?: number) => {
        const state: IConditionRowState  = {
            propertyId: this.props.id,
            selectedCompareConditionKey: option.key
        };
        if (this.props.compareConditionChanged) {
           this.props.compareConditionChanged(state);
        }
    }

    renderTextFieldEditor = (placeholer: string, value: any, type: string = 'text') => {
        return <TextField 
                required={true} 
                placeholder="Enter text value"
                value={value}
                onChanged={this.textFieldChanged}
                type={type}
            />; 
    }

    renderDropDown = (options) => {
        return <Dropdown 
                showArrowIcon={false}
                dropdownType={DropdownType.selectionDropdown}
                options={options}
                hasTitleBorder={true}
                onChanged={this.dropdownChanged} 
               />;
    }


    renderDatePicker = (value: any) => {
        return <DateTimeDropdownPicker
                selectedDate={value}  
                includeTime={true} 
                onTimeSelectionChanged={this.dateDropdownChanged}            
              />;
    }

    
    renderItemEditor = (propertyType: PropertyTypeEnum,  additionalData: any) => {
        switch (propertyType) {
            case PropertyTypeEnum.String: {
                return this.renderTextFieldEditor('Enter text', additionalData);                
            }
            case PropertyTypeEnum.Number: {
                return this.renderTextFieldEditor('Enter number', additionalData, 'number');
            }
            case PropertyTypeEnum.Boolean: {
                const booleanChoices = [{key: 1, text: 'True', selected: Boolean(additionalData)}, {key: 0, text: 'False', selected: !additionalData}];
                return this.renderDropDown(booleanChoices);
            }
            case PropertyTypeEnum.Enum: {
                return this.renderDropDown(additionalData);
            }
            case PropertyTypeEnum.DateTime: {
                return this.renderDatePicker(additionalData);
            }
        }
    }

    dateDropdownChanged = (newDate: Date) => {
        this.conditionValueChanged(newDate);
    }

    textFieldChanged = (newText: string) => {
        this.conditionValueChanged(newText);
    }

    dropdownChanged = (option: IDropdownOption, index?: number) => {
        this.conditionValueChanged(option.key);
    }

    conditionValueChanged = (conditionValue: any) => {
        if (this.props.conditionValueChanged) {
            this.props.conditionValueChanged(this.props.id, conditionValue);
        }
    }

    render () {
        const { connectDragSource, isDragging, compareConditions, hasIndent, indentSize, additionalData,
            classname, propertyName, propertyType, isHardcodedValue } = this.props;
        const indentStyle = {width: indentSize + 'px'};
        return connectDragSource (
            <div draggable={true} className={classNames('command-definition-row-container', classname, {'command-in-drag': isDragging})}>                    
                <div className="left-content">
                    {hasIndent &&
                        <div style={indentStyle}/>
                    }
                    {isHardcodedValue &&           
                        <div>
                            {propertyName}
                        </div>     
                    }    
                    {!isHardcodedValue &&
                        <div className="condtion-content">                           
                            <div>
                                <b>{propertyName}</b>
                            </div>
                            <Dropdown 
                                showArrowIcon={false}
                                dropdownType={DropdownType.selectionDropdown}
                                options={compareConditions}
                                hasTitleBorder={true}
                                onChanged={this.compareConditionChanged}
                            />
                            {this.renderItemEditor(propertyType, additionalData)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}
