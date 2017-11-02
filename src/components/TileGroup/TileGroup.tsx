import * as React from 'react';
import { ITileGroupProps } from './TileGroup.Props';
import { ServerTile } from '../ServerTile/ServerTile';
import { Group } from '../Group/Group';
import * as classNames from 'classnames';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import {
    getServerMeasures,
    sortServersByStatusAndName,
    filterServerByName,
    getDiskInformationFromMeasurements,
    filterServerByStatus
} from '../../utilities/server';

import './TileGroup.scss';

export class TileGroup extends React.PureComponent<ITileGroupProps, {}> {
    public render(): JSX.Element {
        const { farm } = this.props;
        let servers = farm.servers.sort((server1, server2) => {
            return sortServersByStatusAndName(
                { status: server1.status, name: server1.name },
                { status: server2.status, name: server2.name }
            );
        });
        return (
            <Group
                editFunc={this.props.onGroupEdit}
                deleteFunc={this.props.onGroupDelete}
                addFunc={this.props.onAddToGroup}
                serverChildrenCount={farm.servers.length}
                filter={this.props.filter}
                className={'farm-name-inside'}
                id={farm.id}
                name={farm.name}
                key={farm.id}
                onClick={this.props.groupOnClick}
                iconName={this.props.iconName}
                iconTitle={this.props.iconTitle}
            >
                {
                    servers.map((server, serverIndex) => (
                        <ServerTile
                            key={serverIndex}
                            name={server.name}
                            id={server.id}
                            roles={server.roles}
                            status={server.status}
                            countersData={getServerMeasures(server.measures)}
                            serverOnClick={this.serverOnClick}
                            diskInformation={getDiskInformationFromMeasurements(server.measures)}
                            onClose={this.props.onServerClose !== undefined ? this._onServerClose : undefined}
                            hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}>
                        </ServerTile>
                    ))
                }
            </Group>
        );
    }

    private _onServerClose = (serverId: any, event: any) => {
        this.props.onServerClose(serverId, this.props.farm.id, event);
    }

    private _editRoles = (serverId: any, event: any) => {
        this.props.onServerRoleEdit(serverId, this.props.farm.id, event);
    }

    private serverOnClick = (serverId: any) => {
        const { farm, serverOnClick } = this.props;
        if (serverOnClick) {
            serverOnClick(farm.id, serverId);
        }
    }
}
