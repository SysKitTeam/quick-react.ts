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
import { Button } from './../../src/components/Button/Button';

export class Index extends React.Component<any, any> {
    public render() {
        
        return (
            <div>
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
