/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { NavigationGroup } from './../../src/components/NavigationGroup/NavigationGroup';
import { INavigationGroupItem, INavigationGroupCategory, INavigationGroupProps } from './../../src/components/NavigationGroup/navigationGroup.Props';


export class Index extends React.Component<any, any> {
    constructor(prop) {
        super(prop);
    }

    getCategory() : INavigationGroupCategory {
        const item : INavigationGroupItem = {
            text: 'User Sessions',
            disabled: false, 
            Key : 1
        };
        const item2 : INavigationGroupItem = {
            text: 'Users by Session State',
            disabled: false, 
            Key : 2
        };
        const item3 : INavigationGroupItem = {
            text: 'Logon History',
            disabled: false, 
            Key : 3
        };
        const item4 : INavigationGroupItem = {
            text: 'Time Spent',
            disabled: true, 
            Key : 4
        };
        const item5 : INavigationGroupItem = {
            text: 'Users per Day',
            disabled: false, 
            Key : 5
        };
        const testarosa : INavigationGroupCategory = {
            text: 'User management',
            items: [item, item2, item3, item4, item5]
        };
        return testarosa;
    }
    getCategory2() : INavigationGroupCategory {
        const item : INavigationGroupItem = {
            text: 'Payroll Calculation',
            disabled: false, 
            Key : 6
        };
        const item2 : INavigationGroupItem = {
            text: 'Detailed Sessions Data',
            disabled: true, 
            Key : 7
        };
        const item3 : INavigationGroupItem = {
            text: 'IP Addresses',
            disabled: false, 
            Key : 8
        };
        const item4 : INavigationGroupItem = {
            text: 'Concurrent Usage',
            disabled: false, 
            Key : 9
        };
        const testarosa : INavigationGroupCategory = {
            text: 'Resource Usage',
            items: [item, item2, item3, item4]
        };
        return testarosa;
    }

    public render() {
        return (
            <div>
                <NavigationGroup onNavigationItemClicked={(item) => {alert('ID= ' + item);}} Category={this.getCategory()}/>
                <NavigationGroup onNavigationItemClicked={(item) => {alert('ID= ' + item);}} Category={this.getCategory2()}/>
            </div>
        );
    };
};


ReactDOM.render(<Index />, document.getElementById('root'));
