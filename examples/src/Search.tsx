/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Search } from './../../src/components/Search/Search';


export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div style={{width: '500px'}}>
                  <Search
                    onChange={(newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                    onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
                    />

                    <Search disabled={true}
                    onChange={(newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                    onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
                    />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
