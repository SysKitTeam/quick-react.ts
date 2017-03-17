/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { StatusBar } from './../../src/components/StatusBar/StatusBar';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <StatusBar text={'Initializing index...'}></StatusBar>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
