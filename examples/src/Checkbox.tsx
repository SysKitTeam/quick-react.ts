/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Checkbox } from './../../src/components/Checkbox/Checkbox';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Checkbox label={'This is checkbox'} onChange={(ev, checked) => console.log('aaa')} defaultChecked={true} />
                <Checkbox label={'This is disabled checkbox'} disabled={true} defaultChecked={true} />
                <Checkbox label={'This is checkbox with icon'} onChange={(ev, checked) => console.log('icon')} iconClassName={'icon-User'} />
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
