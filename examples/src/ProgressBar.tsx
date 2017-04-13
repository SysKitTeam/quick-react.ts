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
                <ProgressBar
                    title={'RAM'} 
                    dimensions={{ height: '50px', width: '100%' }}
                    info={'12560 of 15999 GB Used'}
                    data={{ total: 15999, current: 12560 }}
                    showTooltip={true}
                />
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
