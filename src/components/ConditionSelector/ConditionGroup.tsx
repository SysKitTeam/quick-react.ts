import * as React from 'react';
import './ConditionGroup.scss';
import * as classNames from 'classnames';
import { Condition, LogicalOperatorTypeEnum, ExpressionDefinitionTree } from './';
import { Dropdown, DropdownType, IDropdownOption } from '../Dropdown';
import { DropTarget } from 'react-dnd';

const conditionTarget = {
    drop(props) {
        if (!props.subExpressions) {
            return props;
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

    logicalConditionChanged = (option: IDropdownOption, index?: number) => {
        if (this.props.logicalOperatorChanged) {
            this.props.logicalOperatorChanged(this.props.id, Number(option.key));
        }
    }

    render () {        
        let { logicalOperator, subExpressions, conditionDefinition, conditionValueChanged, compareConditionChanged,
            isOver, connectDropTarget, id, conditionDragged, logicalOperatorChanged } = this.props;
        if ((!subExpressions || subExpressions.length === 0) && !conditionDefinition) {
            return null;
        }
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
                                onChanged={this.logicalConditionChanged}
                            />
                        }
                    </div>}
                    { Boolean(subExpressions) && subExpressions.length > 0 &&                     
                        <div className="conditions-group-container">
                            {subExpressions.map((expression, index) => (
                                <ConditionGroup 
                                    key={index} 
                                    {...expression} 
                                    conditionDragged={conditionDragged} 
                                    conditionValueChanged={conditionValueChanged} 
                                    compareConditionChanged={compareConditionChanged} 
                                    logicalOperatorChanged={logicalOperatorChanged}
                                />
                            ))}
                        </div>}
                {conditionDefinition && 
                    <div className="single-condition-container">
                        <Condition 
                            {...conditionDefinition} 
                            conditionDragged={conditionDragged} 
                            parentId={id} 
                            conditionValueChanged={conditionValueChanged} 
                            compareConditionChanged={compareConditionChanged}
                        />
                        <div className={classNames('droppable', {'hiddenDroppable': !isOver})}/>
                    </div>  
                }                             
            </div>
        );
    }
}
