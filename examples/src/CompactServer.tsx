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
            <div>
                <CompactServer id={{ FQDN: 'CUSTOM-PC.localdomain' }} onClose={this._onServerCloseCompactServer} onRoleEdit={this._onClickCompactServer} name={'CUSTOM-PC'} roles={[]} status={1} />
                <CompactServer id={{ FQDN: 'My very very long name of a server I am using I know its very long.domain.com' }} onClose={this._onServerCloseCompactServer} onRoleEdit={this._onClickCompactServer} name={'My very very long name of a server I am using I know its very long'} roles={[]} status={2} />
                <CompactServer id={{ FQDN: 'BANANA-PC.banana.com' }} onClose={this._onServerCloseCompactServer} onRoleEdit={this._onClickCompactServer} editRoles={true} name={'BANANA-PC'} roles={[{ display: 'WPF', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }]} status={0} />
            </div>
        );
    }
      private _onClickCompactServer(serverId) {
        console.log('Clicked on editing roles of server ' + serverId);
    }

    private _onServerCloseCompactServer(serverId) {
        console.log('Clicked on closing server ' + serverId);
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
