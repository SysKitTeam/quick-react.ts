/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Icon } from './../../src/components/Icon/Icon';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                 <Icon iconName={'icon-Account'}></Icon>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
