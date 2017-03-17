/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AddToFavorites } from './../../src/components/AddToFavorites/AddToFavorites';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <AddToFavorites favorited={true} />
                <AddToFavorites favorited={false} />
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
