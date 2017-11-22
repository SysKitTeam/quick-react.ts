import * as React from 'react';
import './Condition.scss';
import * as classNames from 'classnames';
import { ConditionRowState, ConditionDefinition, PropertyTypeEnum } from './';
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
export class Condition extends React.PureComponent <ConditionDefinition, {}> {
    public static defaultProps = {
        hasIndent: false,
        indentSize: 30,
        isHardcodedValue: false
    };

    compareConditionChanged = (option: IDropdownOption, index?: number) => {
        const state: ConditionRowState  = {
            propertyId: this.props.id,
            selectedCompareConditionKey: option.key
        };
        if (this.props.compareConditionChanged) {
           this.props.compareConditionChanged(state);
        }
    }
    
    renderItemEditor = (propertyType: PropertyTypeEnum,  additionalData: any) => {
        switch (propertyType) {
            case PropertyTypeEnum.String: {
                return (
                    <TextField 
                        required={true} 
                        placeholder="Enter text value"
                        value={additionalData}
                        onChanged={this.textFieldChanged}
                    />
                );                
            }
            case PropertyTypeEnum.Number: {
                return (
                    <TextField 
                        required={true} 
                        placeholder="Enter number value"  
                        value={additionalData}
                        type={'number'}                         
                        onChanged={this.textFieldChanged}
                    />
                );          
            }
            case PropertyTypeEnum.Boolean: {
                const booleanChoices = [{key: 1, text: 'True', selected: Boolean(additionalData)}, {key: 0, text: 'False', selected: !additionalData}];
                return (
                    <Dropdown 
                        showArrowIcon={false}
                        dropdownType={DropdownType.selectionDropdown}
                        options={booleanChoices}
                        hasTitleBorder={true}
                        onChanged={this.dropdownChanged}/>
                );
            }
            case PropertyTypeEnum.Enum: {
                return (
                    <Dropdown 
                        showArrowIcon={false}
                        dropdownType={DropdownType.selectionDropdown}
                        options={additionalData}
                        hasTitleBorder={true}
                        onChanged={this.dropdownChanged}/>
                );
            }
            case PropertyTypeEnum.DateTime: {
                return (
                    <DateTimeDropdownPicker
                        selectedDate={new Date()}  
                        includeTime={true} 
                        onTimeSelectionChanged={this.dateDropdownChanged}            
                    />
                );
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
