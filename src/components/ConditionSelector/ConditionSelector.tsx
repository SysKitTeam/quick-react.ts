import * as React from 'react';
import './ConditionSelector.scss';
import { Treeview } from '../Treeview/Treeview';
import { ITreeviewItem } from '../Treeview/TreeviewItem.Props';
import { ConditionDefinitionRowProps } from './ConditionDefinitionRow.Props';
import { ConditionDefinitionRow} from './ConditionDefinitionRow';

export class ConditionSelectorPorps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: ConditionDefinitionRowProps[];
}


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
                        { selectedConditions && selectedConditions.length > 0 && selectedConditions.map((item, index) => {
                            return (<ConditionDefinitionRow key={index} { ...item } />);
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
