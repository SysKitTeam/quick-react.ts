import * as React from 'react';
import './ConditionDefinitionRow.scss';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';
import * as classNames from 'classnames';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import { ConditionDefinitionRowProps, LogicalOperatorTypeEnum, ConditionDefinitionRowState } from './ConditionDefinitionRow.Props';

export class ConditionDefinitionRow extends React.PureComponent <ConditionDefinitionRowProps, any> {
    public static defaultProps = {
        showStartLogialOperator: true,
        allowConditionDeletion: true,
        hasIndent: false,
        indentSize: 30,
        hasMultipleLogicalOperations: true,
        selectedLogicalOperator: LogicalOperatorTypeEnum.And
    };

    getLogicalOperationsList = () => {
        const getLogicalOpertionItem = (value: LogicalOperatorTypeEnum, displayText: string) => {
            return {key: value, text: displayText, selected: value === this.props.selectedLogicalOperator};
        };
        return [getLogicalOpertionItem(LogicalOperatorTypeEnum.And, 'And'), getLogicalOpertionItem(LogicalOperatorTypeEnum.Or, 'Or')];        
    }

    logicalOperatorChanged = (option: IDropdownOption, index?: number) => {        
        const state: ConditionDefinitionRowState = {
            id: this.props.id,
            propertyName: this.props.propertyName,
            selectedLogicalOperator: option,
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
            selectedLogicalOperator: this.getSelectedConditionElement(this.getLogicalOperationsList()),
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
                selectedLogicalOperator: this.getSelectedConditionElement(this.getLogicalOperationsList()),
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
        const logicalOperators = this.getLogicalOperationsList();
        const indentStyle = {width: this.props.indentSize + 'px'};
        return (
            <div className={classNames('command-definition-row-container', this.props.classname)}>                    
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
                            {this.props.showStartLogialOperator &&
                                <Dropdown 
                                    showArrowIcon={false}
                                    dropdownType={DropdownType.selectionDropdown}
                                    options={this.getLogicalOperationsList()}
                                    hasTitleBorder={true}
                                    onChanged={this.logicalOperatorChanged}
                                />
                            }
                            <div>
                                with <b>{this.props.propertyName}</b>
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
