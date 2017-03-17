/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Callout } from './../../src/components/Callout/Callout';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Callout> AAAAAAA<Callout>BBBBBBBB</Callout> </Callout>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
