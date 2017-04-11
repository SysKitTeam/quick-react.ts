/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DetailedServerGroup } from './../../src/components/DetailedServerGroup/DetailedServerGroup';
import { DemoServerGroup } from './../MockData/farms';

export class Index extends React.Component<any, any> {
       public constructor() {
        super();
         this.state = {
            farm: DemoServerGroup,
        };    
    }

    public render() {
        return (
            <div>
                <DetailedServerGroup id={''} serverGroup={this.state.farm} filter={''} />              
            </div>
        );
    };  
};
ReactDOM.render(<Index />, document.getElementById('root'));
