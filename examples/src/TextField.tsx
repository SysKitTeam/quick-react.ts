/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TextField } from './../../src/components/TextField/TextField';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div style={{width: '300px'}}>
                <TextField required={true} label="TextField with a placeholder:" placeholder="Now I am a Placeholder" />
                <TextField label="Required TextField:" required={true} />
                <TextField label="Disabled TextField:" disabled={true} />
                <TextField label="Error TextField:" errorMessage={'Error Message'} />
                <TextField label="Description TextField:" description={'Description Message'} />
                <TextField label={'Underlined TextField:'} placeholder="Underlined TextField" underlined />
                <TextField label="Multiline TextField:" multiline rows={4} cols={50} />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
