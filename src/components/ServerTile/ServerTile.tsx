import * as React from 'react';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IServerTileProps, ITileData } from './ServerTile.Props';
import { DisksInformation } from './DisksInformation/DisksInformation';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import { ServerStatus } from '../../models';
import { GetClassForStatus } from '../../utilities/server';
import './ServerTile.scss';

export class ServerTile extends React.PureComponent<IServerTileProps, {}> {
    public render() {
        let className = GetClassForStatus('server-details', this.props.status);

        let serverHoverMessage = this.props.hoverMessageForCriticalOrWarningServer && (this.props.status === ServerStatus.Critical || this.props.status === ServerStatus.Warning) ? this.props.hoverMessageForCriticalOrWarningServer : '';

        return (
            <div className={classNames(className, { 'is-clickable': this.props.serverOnClick !== undefined && this.props.serverOnClick !== null })} onClick={this.serverOnClick} title={serverHoverMessage}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.name}>{this.props.name}</Label>
                    {this.props.onClose &&
                        <Icon title={'Delete'} iconName={'icon-delete'} onClick={(event) => this.props.onClose(this.props.id, event)}></Icon>
                    }
                    {!this.props.onClose &&
                        <div style={{ width: '24px', height: '24px', float: 'right', cursor: 'default' }} />
                    }
                    {this.props.diskInformation &&
                        <DisksInformation
                            className="disk-information-container"
                            diskInformation={this.props.diskInformation}
                        />
                    }
                    {this.props.numberOfUsers &&
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-user'}
                            title={this.props.numberOfUsers + ' number of users online'} />
                    }
                    {this.props.roles.length > 0 &&
                        <div>
                            <TagContainer title={''} tags={this.props.roles}>
                                {this.props.onRoleEdit &&
                                    <div className="edit-tags tag" title="Edit roles" onClick={(event => this.props.onRoleEdit(this.props.id))}>
                                        <Icon className="icon-edit"></Icon>
                                    </div>
                                }
                            </TagContainer>
                        </div>
                    }
                    {this.props.children}

                </div>
                <div className={'counters-container'}>
                    {this.createCountersTiles(this.props.countersData)}
                </div>
            </div>
        );
    }

    private serverOnClick = () => {
        const { id, serverOnClick } = this.props;
        if (serverOnClick) {
            serverOnClick(id);
        }
    }

    private createCountersTiles(collection: Array<ITileData>): Array<JSX.Element> {
        return collection.map(
            (data: ITileData, index) =>
                <div key={index} className={'tile'} title={this.createTooltipText(data.hoverText)}>
                    <p>{data.title}</p>
                    <Label className={classNames(
                        { 'status-warning': data.status === ServerStatus.Warning },
                        { 'status-ok': data.status === ServerStatus.OK },
                        { 'status-critical': data.status === ServerStatus.Critical })}>{data.currentUsage}</Label>
                    <Label className={classNames(
                        { 'status-warning': data.status === ServerStatus.Warning },
                        { 'status-ok': data.status === ServerStatus.OK },
                        { 'status-critical': data.status === ServerStatus.Critical })}>{data.usageUnit}</Label>
                </div>
        );
    }

    private createTooltipText(arr: Array<string>): string {
        if (!arr) {
            return '';
        }
        let data = '';
        for (let i = 0; i < arr.length; i++) {
            data += arr[i] + '\n';
        }
        return data;
    }
}
