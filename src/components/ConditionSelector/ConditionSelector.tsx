import * as React from 'react';
import './ConditionSelector.scss';
import { Treeview } from '../Treeview/Treeview';
import { ITreeviewItem } from '../Treeview/TreeviewItem.Props';
import { ExpressionDefinitionTree, PropertyTypeEnum } from './ConditionDefinitionRow.Props';
import { ConditionGroup } from './ConditionDefinitionRow';
import { TextField } from '../TextField/TextField';
import { Dropdown } from '../Dropdown/Dropdown';
import { DateTimeDropdownPicker } from '../DateTimeDropdownPicker/DateTimeDropdownPicker';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';

export class ConditionSelectorPorps {
    specialConditionsList?: ITreeviewItem[];
    standardConditionsList?: ITreeviewItem[];
    selectedConditions?: ExpressionDefinitionTree;
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
                        { selectedConditions && 
                            <ConditionGroup {...selectedConditions} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}
