/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Dropdown } from './../../src/components/Dropdown/Dropdown';
import { ConditionDefinitionRow } from './../../src/components/ConditionSelector/ConditionDefinitionRow';
import { LogicalOperatorTypeEnum, PropertyTypeEnum } from './../../src/components/ConditionSelector/ConditionDefinitionRow.Props';
import { ConditionSelector } from './../../src/components/ConditionSelector/ConditionSelector';
import { DropdownType } from './../../src/components/Dropdown/Dropdown.Props';

import { Label } from './../../src/components/Label/Label';
import { Icon } from './../../src/components/Icon/Icon';
import { Slider } from './../../src/components/Slider/Slider';
import { Button } from './../../src/components/Button/Button';
import { TextField } from './../../src/components/TextField/TextField';

export class Index extends React.Component<any, any> {
    
    public render() {
        const treeviewElements = [{id: '1', text: 'Script returns any data'}, {id: '2', text: 'Script does not return data'}, {id: '3', text: 'Exception occurs while executing the script'}];
        const conditionElements = [{
            id: 3,
            isHardcodedValue: true,
            propertyName: 'Script returns any data',
            hasMultipleLogicalOperations: false,
            allowConditionDeletion: false,
            propertyType: PropertyTypeEnum.None
        }, {
            id: 2,
            isHardcodedValue: false,
            propertyName: 'Network ID',
            hasMultipleLogicalOperations: false,
            conditionSelectionTypes:  [{ key: 'And', text: 'Equals' }, { key: 'Or', text: 'Less than', selected: true }],
            propertyType: PropertyTypeEnum.Number
        }, {
            id: 25,
            isHardcodedValue: false,
            propertyName: 'Network ID',
            hasMultipleLogicalOperations: false,
            conditionSelectionTypes:  [{ key: 'And', text: 'Equals' }, { key: 'Or', text: 'More than ', selected: true }],
            selectedLogicalOperator: LogicalOperatorTypeEnum.Or,
            propertyType: PropertyTypeEnum.Number,
            hasIndent: true
        }, {
            id: 3,
            isHardcodedValue: false,
            propertyName: 'Name',
            conditionSelectionTypes: [{ key: 'Is', text: 'Is'}, { key: 'Or', text: 'Starts with', selected: true }, { key: 'Ise', text: 'I don\'t care'}],
            hasIndent: false,
            selectedLogicalOperator: LogicalOperatorTypeEnum.Or,
            propertyType: PropertyTypeEnum.String
        }, {
            id: 4,
            isHardcodedValue: false,
            propertyName: 'Running',
            conditionSelectionTypes: [{ key: 'Is', text: 'Is'}, { key: 'Or', text: 'Is not', selected: true}],
            selectedLogicalOperator: LogicalOperatorTypeEnum.And,
            propertyType: PropertyTypeEnum.Boolean
        }, {
            id: 5,
            isHardcodedValue: false,
            propertyName: 'Status',
            conditionSelectionTypes: [{ key: 'Is', text: 'Is', selected: true}, { key: 'Or', text: 'Is not'}],
            additionalData: [{ key: 'Is', text: 'Running', selected: true}, { key: 'Or', text: 'Stopped'}, { key: 'O1r', text: 'Restarting'}, { key: 'Or2', text: 'Restart pending'}],
            selectedLogicalOperator: LogicalOperatorTypeEnum.And,
            propertyType: PropertyTypeEnum.Enum
        }, {
            id: 6,
            isHardcodedValue: false,
            propertyName: 'Restarted on',
            conditionSelectionTypes: [{ key: 'Is', text: 'On', selected: true}, { key: 'O1r', text: 'Before'}, { key: 'O2r', text: 'After'}],
            selectedLogicalOperator: LogicalOperatorTypeEnum.And,
            propertyType: PropertyTypeEnum.DateTime
        }];
        return (
            <div>

                    <ConditionSelector 
                        specialConditionsList = {treeviewElements}
                        standardConditionsList = {treeviewElements}
                        selectedConditions= {conditionElements}
                    />

                    <ConditionDefinitionRow 
                        id={3}
                        isHardcodedValue={true}
                        propertyName="Script returns any data"
                        hasMultipleLogicalOperations={false}
                        allowConditionDeletion={false} />
                    <ConditionDefinitionRow 
                        id={3}
                        isHardcodedValue={false}
                        propertyName="Name"
                        hasMultipleLogicalOperations={false}
                        conditionSelectionTypes = {[{ key: 'And', text: 'Equals' }, { key: 'Or', text: 'Less than', selected: true }]}
                    >
                        <Dropdown
                            hasTitleBorder={true}
                            dropdownType={DropdownType.selectionDropdown}
                            onClick={(option, index) => console.log(option, index)}
                            options={
                                [
                                    { key: 'A', text: 'Option a' },
                                    { key: 'B', text: 'Option b' },
                                    { key: 'C', text: 'Option c' },
                                    { key: 'D', text: 'Option d', selected: true},
                                    { key: 'E', text: 'Option e' },
                                    { key: 'F', text: 'Option f' },
                                    { key: 'G', text: 'Option g' },
                                    { key: 'H', text: 'Option h' },
                                    { key: 'I', text: 'Option i' },
                                    { key: 'J', text: 'Option j' }
                                ]
                            }
                        />
                    </ConditionDefinitionRow>
                    <ConditionDefinitionRow
                        id={3}
                        isHardcodedValue={false}
                        propertyName="Name"
                        conditionSelectionTypes = {[{ key: 'Is', text: 'Is'}, { key: 'Or', text: 'Is not'}, { key: 'Ise', text: 'I don\'t care', selected: true }]}
                        hasIndent={true}
                    >
                    <TextField required={true} placeholder="Now I am a Placeholder" /> <br />
                    </ConditionDefinitionRow>

                <Dropdown
                    hasTitleBorder={true}
                    dropdownType={DropdownType.selectionDropdown}
                    label="Dropdown:"
                    onClick={(option, index) => console.log(option, index)}
                    showArrowIcon={false}
                    options={
                        [
                            { key: 'A', text: 'Option a' },
                            { key: 'B', text: 'Option b' },
                            { key: 'C', text: 'Option c' },
                            { key: 'D', text: 'Option d' },
                            { key: 'E', text: 'Option e' },
                            { key: 'F', text: 'Option f' },
                            { key: 'G', text: 'Option g' },
                            { key: 'H', text: 'Option h', selected: true },
                            { key: 'I', text: 'Option i' },
                            { key: 'J', text: 'Option j' }
                        ]
                    }
                />
                <Dropdown
                    hasTitleBorder={true}
                    dropdownType={DropdownType.selectionDropdown}
                    label="Dropdown:"
                    onClick={(option, index) => console.log(option, index)}
                    options={
                        [
                            { key: 'A', text: 'Option a', icon: 'icon-add' },
                            { key: 'B', text: 'Option b', icon: 'icon-buy' },
                            { key: 'C', text: 'Option c', icon: 'icon-user' },
                            { key: 'D', text: 'Option d' },
                            { key: 'E', text: 'Option e' },
                            { key: 'F', text: 'Option f' },
                            { key: 'G', text: 'Option g' },
                            { key: 'H', text: 'Option h', selected: true },
                            { key: 'I', text: 'Option i' },
                            { key: 'J', text: 'Option j' }
                        ]
                    }
                />

                <Dropdown
                    hasTitleBorder={true}
                    dropdownType={DropdownType.selectionDropdown}
                    label="Disabled Dropdown:"
                    disabled={true}
                    onClick={(option, index) => console.log(option, index)}
                    options={
                        [
                            { key: 'A', text: 'Option a', icon: 'icon-add' },
                            { key: 'B', text: 'Option b', icon: 'icon-buy' },
                            { key: 'C', text: 'Option c', icon: 'icon-user' },
                            { key: 'D', text: 'Option d' },
                            { key: 'E', text: 'Option e' },
                            { key: 'F', text: 'Option f' },
                            { key: 'G', text: 'Option g' },
                            { key: 'H', text: 'Option h', selected: true },
                            { key: 'I', text: 'Option i' },
                            { key: 'J', text: 'Option j' }
                        ]
                    }
                />

                <Dropdown icon={'icon-add'} label="Icon Dropdown:" className={'icon-dropdown'} dropdownType={DropdownType.customDropdown}>
                    <Label style={{paddingLeft: '5px'}}>Header</Label>
                    <hr />
                    <li style={{display: 'inline-block', padding: '5px', width: '100px'}}>
                        <Icon style={{paddingTop: '5px'}} iconName={'icon-account'}></Icon>
                        <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
                    </li>
                    <li style={{display: 'inline-block', padding: '5px', width: '100px'}}>
                        <Icon style={{paddingTop: '5px'}} iconName={'icon-account'}></Icon>
                        <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
                    </li>
                </Dropdown>

                <div>
                    <Label>Button + Arrow Dropdown:</Label>
                    <div style={{display: 'inline-flex'}}>
                        <Button className={'button-primary'} icon={'icon-add'} style={{borderRadius: '8px 0 0 8px'}}></Button>
                        <Dropdown className={'arrow-dropdown'} dropdownType={DropdownType.customDropdown}>
                            <li className={'dropdown-item'}>Option a</li>
                            <li className={'dropdown-item is-selected'}>Option b</li>
                            <li className={'dropdown-item'}>Option c</li>
                            <li className={'dropdown-item'}>Option d</li>
                        </Dropdown>
                    </div>
                </div>
            </div>

        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
