/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MessageBox } from './../../src/components/MessageBox/MessageBox';
import { Button } from './../../src/components/Button/Button';

export class Index extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public render() {
        return (
            <div>
                <Button onClick={() => this.setState({ isOpen: !this.state.isOpen })}>Open MessageBox</Button>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));