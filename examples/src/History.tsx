/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { History } from './../../src/components/History/History';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                 <History />                    
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
