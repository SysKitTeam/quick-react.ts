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
    conditionsChanged?: (key: any, checked: boolean) => void;
    conditionDragged?: (dragSource: any, dragTarget: any) => void;
    conditionValueChanged?: (conditionId: string, conditionValue: any) => void;
    logicalOperatorChanged?: (id: string, logicalOperator: LogicalOperatorTypeEnum) => void;
    compareConditionChanged?: (conditionRowState: ConditionRowState) => void;

}

// @DragDropContext(HTML5Backend)
export class ConditionSelector extends React.PureComponent <ConditionSelectorPorps, any> {

    filterSelectionChanged = (ev?: React.FormEvent<HTMLElement>, itemsId?: string[], checked?: boolean) => {
        const a = 2;
        let b = 2 + '2';
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
                                onSelect= {this.filterSelectionChanged }
                            />
                        }
                        {standardConditionsList &&
                            <Treeview
                                showCheckbox={true}
                                items={ standardConditionsList }
                                onSelect= {this.filterSelectionChanged }
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

@DragDropContext(HTML5Backend)
export class MiddleWare extends React.PureComponent <ConditionSelectorPorps, any> {
    
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

        let target = findElement(dragTarget.id, this.props.selectedConditions);
        let source = findElement(dragSource.parentId, this.props.selectedConditions);

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
    }


    conditionValueChanged = (conditionId: string, conditionValue: any) => {
        const a = 2; 
        let b = 2 + 2;
    }

    logicalOperatorChanged = (id: string, logicalOperator: LogicalOperatorTypeEnum) => {
        const a = 2; 
        let b = 2 + 2;
    }

    compareConditionChanged = (conditionRowState: ConditionRowState) => {
        const a = 2; 
        let b = 2 + 2;
    }

    render () {
        let props = this.props;
        props.selectedConditions.conditionDragged = this.conditionDragged;
        props.selectedConditions.conditionValueChanged = this.conditionValueChanged;
        props.selectedConditions.logicalOperatorChanged = this.logicalOperatorChanged;
        props.selectedConditions.compareConditionChanged = this.compareConditionChanged;
        return (
            <div>
                <ConditionSelector 
                    {...props} 
                    conditionDragged={this.conditionDragged} 
                    conditionValueChanged={this.conditionValueChanged} 
                    logicalOperatorChanged={this.logicalOperatorChanged} 
                    compareConditionChanged={this.compareConditionChanged}   />
            </div>
        );
    }
}
