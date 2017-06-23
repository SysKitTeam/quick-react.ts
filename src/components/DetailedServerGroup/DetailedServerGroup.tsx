import * as React from 'react';
import { IDetailedServerGroupProps } from './DetailedServerGroup.Props';
import { DetailedServerTile } from '../DetailedServerTile/DetailedServerTile';
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
import * as classNames from 'classnames';
import { getServerMeasures, sortServersByStatusAndName, filterServerByName } from '../../utilities/server';
import { autobind } from '../../utilities/autobind';

import './DetailedServerGroup.scss';

export class DetailedServerGroup extends React.PureComponent<IDetailedServerGroupProps, any> {

    @autobind
    private onServerClick(serverId: any) {
        const { serverOnClick, id } = this.props;
        if (serverOnClick) {
            serverOnClick(id, serverId);
        }
    }

    public render() {
        const serverGroup = this.props.serverGroup;
        const servers = serverGroup.servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).sort(sortServersByStatusAndName);
        return (
            <div className={'detailed-server-group'}>
                <Group
                    serverChildrenCount={servers.length}
                    filter={this.props.filter}
                    className={'farm-name-inside'}
                    id={serverGroup.id}
                    name={serverGroup.name}
                    key={serverGroup.id.configDataBaseName + '-' + serverGroup.id.sqlInstance}
                    serversGroup={serverGroup.serversGroup}>
                    {
                        servers.map((server) => (
                            <DetailedServerTile
                                key={server.id.FQDN}
                                roles={server.roles}
                                id={server.id}
                                status={server.status}
                                onRoleEdit={server.onRoleEdit}
                                onClose={server.onClose}
                                name={server.name}
                                memoryUsage={server.memoryUsage}
                                processorUsage={server.processorUsage}
                                partitionUsages={server.partitionUsages}
                                serverOnClick={this.onServerClick}
                            />
                        ))
                    }
                </Group>
            </div>
        );
    }
}
