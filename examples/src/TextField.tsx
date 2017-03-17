/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TextField } from './../../src/components/TextField/TextField';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <TextField label="TextField with a placeholder" placeholder="Now I am a Placeholder" />
                <TextField label="Disabled TextField" disabled={true} />
                <TextField label="Multiline TextField" multiline rows={4} cols={50} />
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
