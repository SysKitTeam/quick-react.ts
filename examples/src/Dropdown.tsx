/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Dropdown } from './../../src/components/Dropdown/Dropdown';
import { DropdownType } from './../../src/components/Dropdown/Dropdown.Props';

import { Label } from './../../src/components/Label/Label';
import { Icon } from './../../src/components/Icon/Icon';
import { Slider } from './../../src/components/Slider/Slider';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div style={{ 'width': '150px' }}>
                <Dropdown
                    hasTitleBorder={true}
                    dropdownType={DropdownType.selectionDropdown}
                    label="Basic example:"
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
                            { key: 'J', text: 'Option j' },
                        ]
                    }
                    />
                <Dropdown icon={'icon-arrow_down_right'} dropdownType={DropdownType.customDropdown}>
                    <Label>Header</Label>
                    <hr />
                    <li style={{ 'display': 'inline-flex' }}>
                        <Icon iconName={'icon-Account'}></Icon>
                        <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
                    </li>
                    <li style={{ 'display': 'inline-flex' }}>
                        <Icon iconName={'icon-Account'}></Icon>
                        <Slider min={0} max={50} step={5} defaultValue={20}></Slider>
                    </li>
                </Dropdown>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
