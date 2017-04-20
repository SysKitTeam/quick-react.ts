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
                    { text: 'Home', id: 'Home', href: 'http://Acceleratio.net', icon: 'icon-help' },
                    { text: 'Activity', id: 'Activity', href: '#1', disabled: true, icon: 'icon-account' },
                    { text: 'News', id: 'News', href: '#2', icon: 'icon-add' },
                    { text: 'Documents', id: 'Documents', href: '#3', selected: true, icon: 'icon-alert' },
                    { text: 'Books', id: 'Books', href: '#4', icon: 'icon-trash' }
                ]}></LeftNavigation>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
