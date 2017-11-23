/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ChoiceGroup } from './../../src/components/ChoiceGroup/ChoiceGroup';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <ChoiceGroup options={[
                        { key: 'A', text: 'Option A' },
                        { key: 'B', text: 'Option B', checked: true },
                        { key: 'C', text: 'Option C', disabled: true },
                        { key: 'D', text: 'Option D', disabled: true }
                    ]} label="Pick one">
                </ChoiceGroup>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
