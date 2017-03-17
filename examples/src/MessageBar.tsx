/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MessageBar } from './../../src/components/MessageBar/MessageBar';
import { MessageBarType } from './../../src/components/MessageBar/MessageBar.Props';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <MessageBar messageBarType={MessageBarType.warning} hasDontShowAgain={true} onDismiss={() => { console.log('test'); } }>Ovo je message bar!</MessageBar>
             </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
