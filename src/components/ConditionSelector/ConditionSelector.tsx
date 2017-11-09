import * as React from 'react';
import './ConditionSelector.scss';
import * as classNames from 'classnames';
import { Treeview } from '../TreeView/TreeView';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import { ITreeviewItem } from '../Treeview/TreeviewItem.Props';

export class ConditionSelector extends React.PureComponent {
    constructor(props) {
        super(props);
    }   

    render() {
        const treeviewElements: ITreeviewItem[] = [{id: '1', text: 'Script returns any data'}, {id: '2', text: 'Script does not return data'}, {id: '3', text: 'Exception occures while executing script'}];
        return (
            <div className="condition-selector-container">
                <div className="selection-list-container">
                    <div className="special-conditions-container">
                        <Treeview
                            showCheckbox={true}
                            items={treeviewElements}
                        />
                    </div>
                    <div className="selection-conditions">
                        <Treeview
                            showCheckbox={true}
                            items={treeviewElements}
                        />
                    </div>
                </div>
                <div className="selection-options">
                    
                    ona velika kontrola
                </div>
            </div>
        );
    }
}

export class ConditionDefinitionRowProps {    
    PropertyName: string;
    IsHardcodedValue: boolean;
    SelectedLogicalOperator?: LogicalOperatorTypeEnum; // default and
    ConditionSelectionTypes?: IDropdownOption[];
    ShowStartLogialOperator?: boolean; // default true
    HasMultipleLogicalOperations?: boolean; // default true
    AllowConditionDeletion?: boolean; // default true
    HasIndent?: boolean; // default false 
    IndentSize?: number; // default 30
    OnLogicalOperatorChanged?: (option: IDropdownOption, index?: number) => void;
    OnConditionTypeChanged?: (option: IDropdownOption, index?: number) => void;
    OnAddButtonCliked?: any;
    OnRemoveButtonCliked?: any;
}

export enum LogicalOperatorTypeEnum {
    And = 0,
    Or
}

export class ConditionDefinitionRow extends React.PureComponent <ConditionDefinitionRowProps, any> {
    public static defaultProps = {
        ShowStartLogialOperator: true,
        AllowConditionDeletion: true,
        HasIndent: false,
        IndentSize: 30,
        HasMultipleLogicalOperations: true,
        SelectedLogicalOperator: LogicalOperatorTypeEnum.And
    };


    getLogicalOperationsList = () => {
        const getLogicalOpertionItem = (value: LogicalOperatorTypeEnum, displayText: string) => {
            return {key: value, text: displayText, selected: value === this.props.SelectedLogicalOperator};
        };
        return [getLogicalOpertionItem(LogicalOperatorTypeEnum.And, 'And'), getLogicalOpertionItem(LogicalOperatorTypeEnum.Or, 'Or')];        
    }

    render () {
        const logicalOperators = this.getLogicalOperationsList();
        const indentStyle = {width: this.props.IndentSize + 'px'};
        return (
            <div className="command-definition-row-container">                     
                {this.props.IsHardcodedValue &&           
                    <div className="left-content">
                            <div>
                                {this.props.PropertyName}
                            </div>                      
                    </div>      
                }                
                {!this.props.IsHardcodedValue &&
                    <div className="left-content">
                        {this.props.HasIndent &&
                            <div style={indentStyle}/>
                        }
                        <div className="condtion-content">
                            {this.props.ShowStartLogialOperator &&
                                <Dropdown 
                                    dropdownType={DropdownType.selectionDropdown}
                                    options={this.getLogicalOperationsList()}
                                    hasTitleBorder={true}
                                    onChanged={this.props.OnLogicalOperatorChanged}
                                />
                            }
                            <div>
                                with <b>{this.props.PropertyName}</b>
                            </div>
                            <Dropdown 
                                dropdownType={DropdownType.selectionDropdown}
                                options={this.props.ConditionSelectionTypes}
                                hasTitleBorder={true}
                                onChanged={this.props.OnConditionTypeChanged}
                            />
                            {this.props.children}
                        </div>
                    </div>
                }
                <div className="condition-actions">
                    { this.props.HasMultipleLogicalOperations &&
                        <Button className={'button-secondary add-new-condition'} icon={'icon-add'} title={'Add sub-condition'} onClick={this.props.OnAddButtonCliked}/>
                    }
                    {this.props.AllowConditionDeletion &&
                        <Button className={'button-secondary delete-condition'} icon={'icon-delete'} title={'Remove condition'} onClick={this.props.OnAddButtonCliked}/>                    
                    }
                </div>
            </div>
        );
    }
}
