import * as React from 'react';
import './ConditionSelector.scss';
import { Treeview, ITreeviewItem } from '../Treeview';
import { ExpressionDefinitionTree, ConditionGroup, ConditionDefinition, LogicalOperatorTypeEnum, ConditionRowState } from './';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

export class ConditionSelectorPorps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: ExpressionDefinitionTree;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    logicalOperatorChanged?: (id: string, logicalOperator: LogicalOperatorTypeEnum) => void;
    compareConditionChanged?: (conditionRowState: ConditionRowState) => void;
    conditionListSelectionChanged?: (treeListId: string, itemsId?: string[], checked?: boolean) => void;

}

// @DragDropContext(HTML5Backend)
export class ConditionSelector extends React.PureComponent <ConditionSelectorPorps, any> {

    specialConditionsSelectionChanged = (ev?: React.FormEvent<HTMLElement>, itemsId?: string[], checked?: boolean) => {
        if (this.props.conditionListSelectionChanged) {
            this.props.conditionListSelectionChanged('0', itemsId, checked);
        }
    }  

    standardConditionsSelectionChanged = (ev?: React.FormEvent<HTMLElement>, itemsId?: string[], checked?: boolean) => {
        if (this.props.conditionListSelectionChanged) {
            this.props.conditionListSelectionChanged('1', itemsId, checked);
        }
    }  

    render() {
        const {specialConditionsList, standardConditionsList, selectedConditions,
            conditionDragged, conditionValueChanged, logicalOperatorChanged, compareConditionChanged} = this.props;         
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
                                onSelect= {this.specialConditionsSelectionChanged }
                            />
                        }
                        {standardConditionsList &&
                            <Treeview
                                showCheckbox={true}
                                items={ standardConditionsList }
                                onSelect= {this.standardConditionsSelectionChanged }
                            />
                        }
                    </div>
                </div>
                <div className="selection-container">
                    <div className="conditions-title">
                        Edit conditions 
                    </div>
                    <div className="selection-inner-container">
                        { selectedConditions && 
                            <ConditionGroup 
                                {...selectedConditions}
                                conditionDragged={conditionDragged} 
                                conditionValueChanged={conditionValueChanged} 
                                logicalOperatorChanged={logicalOperatorChanged} 
                                compareConditionChanged={compareConditionChanged}   
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export class ConditionSelectorContainerPorps {
    conditionSelectorProps: ConditionSelectorPorps;
    onDragDrop?: (newTree: ExpressionDefinitionTree) =>  void;

}


@DragDropContext(HTML5Backend)
export class ConditionSelectorContainer extends React.PureComponent <ConditionSelectorContainerPorps, any> {
    
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
