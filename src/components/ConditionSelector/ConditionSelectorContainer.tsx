import * as React from 'react';
import './ConditionSelector.scss';
import { ExpressionDefinitionTree, ConditionDefinition, LogicalOperatorTypeEnum, ConditionSelectorPorps, ConditionSelector, ConditionSelectorContainerProps } from './';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

@DragDropContext(HTML5Backend)
export class ConditionSelectorContainer extends React.PureComponent <ConditionSelectorContainerProps, {}> {
    
    constructor (props) {
        super(props);
    }

    conditionDragged = (dragSource: ConditionDefinition, dragTarget: ExpressionDefinitionTree) => {
        const findElement = (id, treeElement: ExpressionDefinitionTree) => {
            if (Boolean(treeElement)) {
                if (treeElement.id === id) {
                    return treeElement;
                } else if (Boolean(treeElement.subExpressions)) {
                    for (let leaf of treeElement.subExpressions) {
                        const child = findElement(id, leaf);
                        if (Boolean(child) && child.id === id) {
                            return child;
                        }
                    }
                }
            }
            return null;
        };
        const { onDragDrop } = this.props;
        let conditionSelectorProps = { ...this.props.conditionSelectorProps};

        let target = findElement(dragTarget.id, conditionSelectorProps.selectedConditions);
        let source = findElement(dragSource.parentId, conditionSelectorProps.selectedConditions);
        if (target.id === source.id) {
            return;
        }
        target.subExpressions = [];
        const existingCondition: ExpressionDefinitionTree = {
            id: dragTarget.id + (target.subExpressions.length + 1),
            logicalOperator: LogicalOperatorTypeEnum.None,
            conditionDefinition: {...dragTarget.conditionDefinition}
        };
        target.subExpressions.push(existingCondition);
        const conditionCopy: ExpressionDefinitionTree = {
            id: dragTarget.id + (target.subExpressions.length + 1),
            logicalOperator: LogicalOperatorTypeEnum.And,
            conditionDefinition: {...dragSource}
        };
        target.subExpressions.push(conditionCopy);
        target.conditionDefinition = null;
        source.conditionDefinition = null;
        source = null;
        if (onDragDrop) {
            onDragDrop(conditionSelectorProps.selectedConditions);
        }
    }


    render () {
        let props = this.props.conditionSelectorProps;
        return (
            <div>
                <ConditionSelector 
                    {...props} 
                    conditionDragged={this.conditionDragged} 
                    conditionValueChanged={props.conditionValueChanged} 
                    logicalOperatorChanged={props.logicalOperatorChanged} 
                    compareConditionChanged={props.compareConditionChanged}
                    conditionListSelectionChanged={props.conditionListSelectionChanged}   
                />
            </div>
        );
    }
}
