/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './../../src/components/Button/Button';
import { ButtonType } from './../../src/components/Button/Button.Props';
import { AddToFavorites } from './../../src/components/AddToFavorites/AddToFavorites';

export class Index extends React.Component<any, any> {
    public constructor() {
        super();
        this.state = { favorited: true };
    }
    public render() {
        return (
            <div>
                <AddToFavorites favorited={this.state.favorited} />           
                <br/>                  
                <Button onClick={ () => { this.setState({ favorited: !this.state.favorited }); } } >Toggle Favotite</Button>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
