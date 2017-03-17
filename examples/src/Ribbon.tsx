/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Ribbon } from './../../src/components/Ribbon/Ribbon';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
               <Ribbon items={[]}></Ribbon>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
