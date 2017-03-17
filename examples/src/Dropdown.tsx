/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Dropdown } from './../../src/components/Dropdown/Dropdown';
import { DropdownType } from './../../src/components/Dropdown/Dropdown.Props';

export class Index extends React.Component<any, any> {
    public render() {
        return (
           <div style={{ 'width': '150px' }}>
                    <Dropdown
                        hasTitleBorder={true}
                        dropdownType={DropdownType.selectionDropdown}
                        label="Basic example:"
                        options={
                            [
                                { key: 'A', text: 'Option a', icon: 'icon-Add' },
                                { key: 'B', text: 'Option b', icon: 'icon-Buy' },
                                { key: 'C', text: 'Option c', icon: 'icon-User' },
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
                </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
