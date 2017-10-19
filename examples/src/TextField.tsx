/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TextField } from './../../src/components/TextField/TextField';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div style={{ width: '300px' }}>
                <TextField label="TextField with a placeholder:" placeholder="Now I am a Placeholder" /> <br />
                <TextField label="Required TextField:" required={true} /> <br />
                <TextField label="Disabled TextField:" disabled={true} /> <br />
                <TextField label="Error TextField:" errorMessage={'Error Message'} /> <br />
                <TextField label="Description TextField:" description={'Description Message'} /> <br />
                <TextField label={'Underlined TextField:'} placeholder="Underlined TextField" underlined /> <br />
                <TextField label="Multiline TextField:" multiline rows={4} cols={50} />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
