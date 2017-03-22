/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Label } from './../../src/components/Label/Label';
;

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Label>I'm a Label</Label>
                <Label disabled={true}>I'm a disabled Label</Label>
                <Label required={true}>I'm a required Label</Label>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
