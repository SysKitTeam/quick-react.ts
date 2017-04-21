/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainNavigation } from './../../src/components/MainNavigation/MainNavigation';
import { Icon } from './../../src/components/Icon/Icon';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                 <MainNavigation id={'mainNavigation'} logo={'icon-logo'}>
                    <Icon iconName={'icon-buy'}></Icon>
                </MainNavigation>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
