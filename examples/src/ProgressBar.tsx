/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ProgressBar } from './../../src/components/ProgressBar/ProgressBar';


export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <ProgressBar title={'RAM'} width={400} height={20} data={{ total: 15999, current: 12560 }}></ProgressBar>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
