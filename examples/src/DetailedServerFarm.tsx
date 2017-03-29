/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DetailedServerFarm } from './../../src/components/DetailedServerFarm/DetailedServerFarm';
import { DetailedFarm } from './../MockData/farms';

export class Index extends React.Component<any, any> {
       public constructor() {
        super();
         this.state = {
            farm: DetailedFarm,
        };    
    }

    public render() {
        return (
            <div>
                <DetailedServerFarm farm={this.state.farm} filter={''} />              
            </div>
        );
    };  
};
ReactDOM.render(<Index />, document.getElementById('root'));
