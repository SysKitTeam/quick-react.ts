import * as React from 'react';
import './ConditionGroup.scss';
import * as classNames from 'classnames';
import { Condition, PropertyTypeEnum, LogicalOperatorTypeEnum, ExpressionDefinitionTree } from './';
import { Dropdown, DropdownType } from '../Dropdown';
import { TextField } from '../TextField';
import { DateTimeDropdownPicker } from '../DateTimeDropdownPicker/DateTimeDropdownPicker';
import { DropTarget } from 'react-dnd';

const conditionTarget = {
    canDrop(props) {
        return true;
    },
    drop(props, monitor, component) {
        if (!component.props.subExpressions) {
            let a = 2;
            a++;
            const b = a + 'a';
        }
    }
};

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

@DropTarget('condition', conditionTarget, collectTarget)
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
        let { logicalOperator, subExpressions, conditionDefinition } = this.props;
        const { isOver, connectDropTarget } = this.props;
        return connectDropTarget (
            <div className={'condition-definition-item'}>
                {logicalOperator !== LogicalOperatorTypeEnum.None && 
                    <div className="condition-operator">
                        {logicalOperator !== LogicalOperatorTypeEnum.Empty &&
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
                        <div className={classNames('droppable', {'hiddenDroppable': !isOver})}/>
                    </div>  
                }                 
            </div>
        );
    }
}
