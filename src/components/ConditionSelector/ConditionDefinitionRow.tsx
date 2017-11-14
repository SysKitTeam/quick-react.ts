import * as React from 'react';
import './ConditionDefinitionRow.scss';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';
import * as classNames from 'classnames';
import { TextField } from '../TextField/TextField';
import { Treeview } from '../Treeview/Treeview';
import { DateTimeDropdownPicker } from '../DateTimeDropdownPicker/DateTimeDropdownPicker';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import { LogicalOperatorTypeEnum, ConditionDefinitionRowState, PropertyTypeEnum, ExpressionDefinitionTree, ConditionDefinition } from './ConditionDefinitionRow.Props';

export class Condition extends React.PureComponent <ConditionDefinition, any> {
    public static defaultProps = {
        showStartLogialOperator: true,
        allowConditionDeletion: true,
        hasIndent: false,
        indentSize: 30,
        hasMultipleLogicalOperations: true,
        selectedLogicalOperator: LogicalOperatorTypeEnum.And,
        propertyType: PropertyTypeEnum.None
    };

    logicalOperatorChanged = (option: IDropdownOption, index?: number) => {        
        const state: ConditionDefinitionRowState = {
            id: this.props.id,
            propertyName: this.props.propertyName,
            conditionSelectionType: this.getSelectedConditionElement(this.props.conditionSelectionTypes),
            addConditionClicked: false,
            removeConditionClicked: false
        };
        if (this.props.conditionStateChanged) {
            this.props.conditionStateChanged(state);
        }
    }

    conditionSelectionChanged = (option: IDropdownOption, index?: number) => {
        const state: ConditionDefinitionRowState  = {
            id: this.props.id,
            propertyName: this.props.propertyName,
            conditionSelectionType: option,
            addConditionClicked: false,
            removeConditionClicked: false
        };
        if (this.props.conditionStateChanged) {
           this.props.conditionStateChanged(state);
        }
    }

    getSelectedConditionElement (selectOptions) { 
        if (!selectOptions) {
            return null;
        }
        const element = selectOptions.find(x => x.selected === true);
        return element;
    }

    actionButtonClicked = (isAdd: boolean) => {
        return () => {
            const state: ConditionDefinitionRowState  = {
                id: this.props.id,
                propertyName: this.props.propertyName,
                conditionSelectionType: this.getSelectedConditionElement(this.props.conditionSelectionTypes),
                addConditionClicked: isAdd,
                removeConditionClicked: !isAdd
            };
            if (this.props.conditionStateChanged) {
            this.props.conditionStateChanged(state);
            }
        };
    }

    render () {
        const indentStyle = {width: this.props.indentSize + 'px'};
        return (
            <div draggable={true} className={classNames('command-definition-row-container', this.props.classname)}>                    
                <div className="left-content">
                    {this.props.hasIndent &&
                        <div style={indentStyle}/>
                    }
                    {this.props.isHardcodedValue &&           
                        <div className="hardcoded-value-container">
                            {this.props.propertyName}
                        </div>     
                    }    
                    {!this.props.isHardcodedValue &&
                        <div className="condtion-content">                           
                            <div>
                                <b>{this.props.propertyName}</b>
                            </div>
                            <Dropdown 
                                showArrowIcon={false}
                                dropdownType={DropdownType.selectionDropdown}
                                options={this.props.conditionSelectionTypes}
                                hasTitleBorder={true}
                                onChanged={this.conditionSelectionChanged}
                            />
                            {this.props.children}
                        </div>
                    }
                </div>
                <div className="condition-actions">
                    { this.props.hasMultipleLogicalOperations &&
                        <Button 
                            className={'button-secondary add-new-condition'} 
                            icon={'icon-add'} 
                            title={'Add sub-condition'} 
                            onClick={this.actionButtonClicked(true)} 
                        />
                    }
                    {this.props.allowConditionDeletion &&
                        <Button 
                            className={'button-secondary delete-condition'} 
                            icon={'icon-delete'} 
                            title={'Remove condition'} 
                            onClick={this.actionButtonClicked(false)}
                        />
                    }
                </div>
            </div>
        );
    }
}

export class ConditionGroup extends React.PureComponent <ExpressionDefinitionTree, any> {
    
    getLogicalOperationsList = () => {
        const getLogicalOpertionItem = (value: LogicalOperatorTypeEnum, displayText: string) => {
            return {key: value, text: displayText, selected: value === this.props.logicalOperator};
        };
        return [getLogicalOpertionItem(LogicalOperatorTypeEnum.And, 'And'), getLogicalOpertionItem(LogicalOperatorTypeEnum.Or, 'Or')];        
    }

    
    private renderItemEditor = (propertyType: PropertyTypeEnum,  additionalData: any) => {
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

    render () {        
        let {logicalOperator, subExpressions, conditionDefinition} = this.props;
        return (
            <div className="condition-definition-item">
                {logicalOperator !== LogicalOperatorTypeEnum.None && 
                    <div className="condition-operator">
                        {logicalOperator !== LogicalOperatorTypeEnum.Null &&
                            <Dropdown 
                                showArrowIcon={false}
                                dropdownType={DropdownType.selectionDropdown}
                                options={this.getLogicalOperationsList()}
                                hasTitleBorder={true}
                            />
                        }
                    </div>}
                    { Boolean(subExpressions) && subExpressions.length > 0 &&                     
                        <div className="conditions-group-container">
                            {subExpressions.map((expression, index) => (
                                <ConditionGroup key={index} {...expression} />
                            ))}
                        </div>}
                {conditionDefinition && 
                    <div className="single-condition-container">
                        <Condition {...conditionDefinition}> {this.renderItemEditor(conditionDefinition.propertyType, conditionDefinition.additionalData)} </Condition>
                    </div>  
                }                 
            </div>
        );
    }
}


