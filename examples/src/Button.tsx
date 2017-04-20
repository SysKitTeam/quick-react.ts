/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './../../src/components/Button/Button';
import { ButtonType } from './../../src/components/Button/Button.Props';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Button>Button</Button>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
