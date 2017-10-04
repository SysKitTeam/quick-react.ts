/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './../../src/components/Button/Button';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Button>Button</Button> <br/> <br/>
                <Button className={'button-primary'}>Primary Button</Button> <br/> <br/>
                <Button className={'button-primary-gray'}>Primary Gray Button</Button> <br/> <br/>
                <Button className={'button-secondary'}>Secondary Button</Button> <br/> <br/>
                <Button className={'button-tertiary'}>Tertiary Button</Button> <br/> <br/>
                <Button className={'button-textual'}>Textual Button</Button> <br/> <br/>
                <Button className={'button-icon'} icon={'icon-add'}></Button> <br/> <br/>
                <Button className={'button-icon-secondary'} icon={'icon-add'}></Button> <br/> <br/>
                <Button className={'button-icon-text'} icon={'icon-add'}>Icon+Text Button</Button> <br/> <br/>
                <Button href={'javascript:void(0)'} target="_blank">Link</Button> <br/> <br/>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
