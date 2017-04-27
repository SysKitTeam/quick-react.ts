/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Slider } from './../../src/components/Slider/Slider';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Slider label={'This is slider:'} min={0} max={50} step={5} defaultValue={20} showValue={true}></Slider>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
