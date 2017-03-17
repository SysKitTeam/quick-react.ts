/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Label } from './../../src/components/Label/Label';
import { Spinner } from './../../src/components/Spinner/Spinner';
import { SpinnerType } from './../../src/components/Spinner/Spinner.Props';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Label>Normal Spinner</Label>
                <Spinner />
                <Label>Large Spinner With Label</Label>
                <Spinner type={SpinnerType.large} label="Seriously, still loading..." />
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
