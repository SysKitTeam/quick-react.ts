/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LeftNavigation } from './../../src/components/LeftNavigation/LeftNavigation';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <LeftNavigation id={'leftNavigation'} options={[
                    { text: 'Home', id: 'Home', href: 'http://Acceleratio.net', icon: 'icon-Help' },
                    { text: 'Activity', id: 'Activity', href: '#1', disabled: true, icon: 'icon-Account' },
                    { text: 'News', id: 'News', href: '#2', icon: 'icon-Add' },
                    { text: 'Documents', id: 'Documents', href: '#3', selected: true, icon: 'icon-Alert' },
                    { text: 'Books', id: 'Books', href: '#4', icon: 'icon-Trash' }
                ]}></LeftNavigation>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
