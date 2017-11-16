import * as React from 'react';
import './ConditionSelector.scss';
import { Treeview, ITreeviewItem } from '../Treeview';
import { ExpressionDefinitionTree, ConditionGroup } from './';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

export class ConditionSelectorPorps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: ExpressionDefinitionTree;
}

@DragDropContext(HTML5Backend)
export class ConditionSelector extends React.PureComponent <ConditionSelectorPorps, any> {

    render() {
        const {specialConditionsList, standardConditionsList, selectedConditions} = this.props;        
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
                            />
                        }
                        {this.props.standardConditionsList &&
                            <div>
                                <Treeview
                                showCheckbox={true}
                                items={ standardConditionsList }
                            />
                            </div>
                        }
                    </div>
                </div>
                <div className="selection-container">
                    <div className="conditions-title">
                        Edit conditions 
                    </div>
                    <div className="selection-inner-container">
                        { selectedConditions && 
                            <ConditionGroup {...selectedConditions} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
