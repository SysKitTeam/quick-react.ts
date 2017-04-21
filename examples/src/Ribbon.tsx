/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Ribbon } from './../../src/components/Ribbon/Ribbon';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
               <Ribbon
               isSearchBoxVisible={true}               
               items={[
                    {
                        key: 'item1',
                        name: 'item1'
                    },
                    {
                        key: 'divider_1',
                        name: '-'
                    },
                    {
                        key: 'item2',
                        name: 'item2'
                    },
                    {
                        key: 'item3',
                        name: 'item3'
                    }
               ]}                               
               ></Ribbon>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
