import * as React from 'react';
import './ConditionSelector.scss';
import { ConditionGroup, ConditionSelectorPorps } from './';
import { Treeview } from '../Treeview';
export class ConditionSelector extends React.PureComponent <ConditionSelectorPorps, {}> {

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
