/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CompactServer } from './../../src/components/CompactServer/CompactServer';
import { ICompactServerProps } from './../../src/components/CompactServer/CompactServer.Props';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div style={{ width: '220px' }}>
                <CompactServer
                    id={'CUSTOM-PC.localdomain'}
                    onClose={this._onServerCloseCompactServer}
                    onRoleEdit={this._onRoleEdit}
                    name={'CUSTOM-PC'}
                    roles={[]}
                    status={1}
                />

                <CompactServer 
                    id={'My very very long name of a server I am using I know its very long.domain.com'}
                    onRoleEdit={this._onRoleEdit}
                    name={'My very very long name of a server I am using I know its very long'}
                    roles={[]}
                    status={2}
                />

                <CompactServer
                    id={'BANANA-PC.banana.com'}
                    onRoleEdit={this._onRoleEdit}
                    name={'BANANA-PC'}
                    roles={[{ display: 'WPF', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }]}
                    status={0}
                />

                <CompactServer
                    id={'BANANA-PC.banana.com'}
                    onRoleEdit={this._onRoleEdit}
                    onClose={this._onServerCloseCompactServer}
                    name={'BANANA-PC'}
                    roles={[{ display: 'WPF', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }, { display: 'App', iconName: 'icon-add' }, { display: 'Tag', iconName: 'icon-add' }]}
                    status={3}
                />
            </div>
        );
    }
    private _onRoleEdit(serverId) {
        console.log('Clicked on editing roles of server ' + serverId);
    }

    private _onServerCloseCompactServer(serverId) {
        console.log('Clicked on closing server ' + serverId);
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
