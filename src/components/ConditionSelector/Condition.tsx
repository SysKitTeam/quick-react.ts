import * as React from 'react';
import './Condition.scss';
import * as classNames from 'classnames';
import { Dropdown, DropdownType, IDropdownOption } from '../Dropdown';
import { Button } from '../Button';
import { ConditionDefinitionRowState, ConditionDefinition } from './Condition.Props';
import { DragSource } from 'react-dnd';

const conditionSource = {
    beginDrag(props) {
        return {};
    },
    endDrag(props) {
        return {};
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

@DragSource('condition', conditionSource, collectSource)
export class Condition extends React.PureComponent <ConditionDefinition, any> {
    public static defaultProps = {
        showStartLogialOperator: true,
        allowConditionDeletion: true,
        hasIndent: false,
        indentSize: 30,
        hasMultipleLogicalOperations: true,
        isHardcodedValue: false
    };

    logicalOperatorChanged = (option: IDropdownOption, index?: number) => {        
        const state: ConditionDefinitionRowState = {
            id: this.props.id,
            propertyName: this.props.propertyName,
            conditionSelectionType: this.getSelectedConditionElement(this.props.conditionSelectionTypes),
            addConditionClicked: false,
            removeConditionClicked: false
        };
        if (this.props.conditionStateChanged) {
            this.props.conditionStateChanged(state);
        }
    }

    conditionSelectionChanged = (option: IDropdownOption, index?: number) => {
        const state: ConditionDefinitionRowState  = {
            id: this.props.id,
            propertyName: this.props.propertyName,
            conditionSelectionType: option,
            addConditionClicked: false,
            removeConditionClicked: false
        };
        if (this.props.conditionStateChanged) {
           this.props.conditionStateChanged(state);
        }
    }

    getSelectedConditionElement (selectOptions) { 
        if (!selectOptions) {
            return null;
        }
        const element = selectOptions.find(x => x.selected === true);
        return element;
    }

    actionButtonClicked = (isAdd: boolean) => {
        return () => {
            const state: ConditionDefinitionRowState  = {
                id: this.props.id,
                propertyName: this.props.propertyName,
                conditionSelectionType: this.getSelectedConditionElement(this.props.conditionSelectionTypes),
                addConditionClicked: isAdd,
                removeConditionClicked: !isAdd
            };
            if (this.props.conditionStateChanged) {
            this.props.conditionStateChanged(state);
            }
        };
    }

    render () {
        const indentStyle = {width: this.props.indentSize + 'px'};
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource (
            <div draggable={true} className={classNames('command-definition-row-container', this.props.classname, {'command-in-drag': isDragging})}>                    
                <div className="left-content">
                    {this.props.hasIndent &&
                        <div style={indentStyle}/>
                    }
                    {this.props.isHardcodedValue &&           
                        <div>
                            {this.props.propertyName}
                        </div>     
                    }    
                    {!this.props.isHardcodedValue &&
                        <div className="condtion-content">                           
                            <div>
                                <b>{this.props.propertyName}</b>
                            </div>
                            <Dropdown 
                                showArrowIcon={false}
                                dropdownType={DropdownType.selectionDropdown}
                                options={this.props.conditionSelectionTypes}
                                hasTitleBorder={true}
                                onChanged={this.conditionSelectionChanged}
                            />
                            {this.props.children}
                        </div>
                    }
                </div>
                <div className="condition-actions">
                    {false && this.props.hasMultipleLogicalOperations &&
                        <Button 
                            className={'button-secondary add-new-condition'} 
                            icon={'icon-add'} 
                            title={'Add sub-condition'} 
                            onClick={this.actionButtonClicked(true)} 
                        />
                    }
                    {false && this.props.allowConditionDeletion &&
                        <Button 
                            className={'button-secondary delete-condition'} 
                            icon={'icon-delete'} 
                            title={'Remove condition'} 
                            onClick={this.actionButtonClicked(false)}
                        />
                    }
                </div>
            </div>
        );
    }
}
