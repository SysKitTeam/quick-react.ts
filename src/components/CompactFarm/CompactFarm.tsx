import * as React from 'react';
import { ICompactFarmProps } from './CompactFarm.Props';
import { CompactServer } from '../CompactServer/CompactServer';
import { ServerTile } from '../ServerTile/ServerTile';
import { ITileData } from '../ServerTile/ServerTile.Props';
import { Group } from '../Group/Group';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import { getServerMeasures, sortServersByStatusAndName, filterServerByName, filterServerByStatus } from '../../utilities/server';
import { CommonComponent } from '../Common/Common';
import { Callout } from '../Callout/Callout';

import './CompactFarm.scss';
const HOVER_TIME = 250; // ms

export class CompactFarm extends CommonComponent<ICompactFarmProps, any> {
    public static defaultProps = {
        editRoles: false
    };

    private _enterTimerId: number;
    private _serverId = null;
    private _hoverTargetElement = null;

    constructor(props?: ICompactFarmProps) {
        super(props);
        this._enterTimerId = 0;
    }

    private _onItemMouseEnter(serverId, ev: React.MouseEvent<HTMLElement>) {
        let targetElement = ev.currentTarget as HTMLElement;
        if (serverId !== this._serverId) {
            this._enterTimerId = this._async.setTimeout(() => this._displayServerTile(serverId, targetElement), HOVER_TIME);
        }
    }

    componentWillReceiveProps(nextProps: ICompactFarmProps) {
        this._async.clearTimeout(this._enterTimerId);
        let server = null;
        if (this._serverId !== null) {
            server = nextProps.farm.servers.filter((s) => s.id === this._serverId);
        }
        if (!server || server.length === 0) {
            this._hideServerTile();
        }
    }

    private _onMouseLeave = (ev?: React.MouseEvent<HTMLElement>) => {
        this._async.clearTimeout(this._enterTimerId);
        this._hideServerTile();
    }

    private _displayServerTile(serverId, target: HTMLElement) {
        if (this._serverId !== serverId) {
            if (this._serverId) {
                this._hideServerTile();
            }
            this._serverId = serverId;
            this._hoverTargetElement = target;
            this.forceUpdate();
        }
    }

    private _hideServerTile = () => {
        this._serverId = null;
        this._hoverTargetElement = null;
        this.forceUpdate();
    }

    private _renderServerTile = (serverId): JSX.Element => {
        const server = this.props.farm.servers.filter((currServer) => { return currServer.id === serverId; })[0];
        return (
            <ServerTile
                name={server.name}
                id={server.id}
                roles={server.roles}
                status={server.status}
                countersData={getServerMeasures(server.measures)}>
            </ServerTile>
        );
    }

    private _onServerClicked = (serverId: any) => {
        const { serverOnClick, farm } = this.props;

        if (serverOnClick) {
            serverOnClick(farm.id, serverId);
        }
    }

    public render() {
        const farm = this.props.farm;
        let servers = farm.servers.sort((server1, server2) => {
            return sortServersByStatusAndName(
                { status: server1.status, name: server1.name },
                { status: server2.status, name: server2.name }
            );
        });

        return (
            <div className={'compact-farm'}>
                <Group
                    editFunc={this.props.onGroupEdit}
                    deleteFunc={this.props.onGroupDelete}
                    addFunc={this.props.onAddToGroup}
                    serverChildrenCount={servers.length}
                    className={'farm-name-inside'}
                    id={farm.id} name={farm.name}
                    key={farm.id}
                    onClick={this.props.groupOnClick}
                    iconName={this.props.iconName}
                    iconTitle={this.props.iconTitle}
                >
                    {
                        servers.map((server, index) => (
                            <CompactServer
                                key={server.id}
                                roles={server.roles}
                                id={server.id}
                                status={server.status}
                                onRoleEdit={this.props.onServerRoleEdit !== undefined ? this._onRoleChange : undefined}
                                onClose={this.props.onServerClose !== undefined ? this._onServerClose : undefined}
                                name={server.name}
                                serverOnClick={this._onServerClicked}
                                onMouseEnter={this._onItemMouseEnter.bind(this, server.id)}
                                onMouseLeave={this._onMouseLeave}
                                hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}
                            />
                        ))
                    }
                    {
                        this._serverId &&
                        <Callout
                            targetElement={this._hoverTargetElement}
                            hideBorder
                            isBeakVisible={false}
                            gapSpace={5}
                            className="compact-farm-callout">
                            {this._renderServerTile(this._serverId)}
                        </Callout>
                    }
                </Group>
            </div>
        );
    }

    private _onServerClose = (serverId, event) => {
        this.props.onServerClose(serverId, this.props.farm.id, event);
    }

    private _onRoleChange = (serverId, event) => {
        if (this.props.onServerRoleEdit) {
            this.props.onServerRoleEdit(serverId, this.props.farm.id, event);
        }
    }
}
