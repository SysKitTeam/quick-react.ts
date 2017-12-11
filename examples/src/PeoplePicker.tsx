/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PeoplePicker } from '../../src/components/PeoplePicker/PeoplePicker';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div style={{ width: '500px' }}>
                <PeoplePicker />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
