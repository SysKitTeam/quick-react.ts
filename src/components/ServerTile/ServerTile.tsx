import * as React from 'react';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IServerTileProps } from './ServerTile.Props';
import { Icon } from '../Icon/Icon';
import './ServerTile.scss';

import { IServerCountersData } from './ServerTile.Props';
export class ServerTile extends React.PureComponent<IServerTileProps, any> {

    constructor(props?: IServerTileProps) {
        super(props);
    }

    public render() {
        return (
            <div className={classNames('server-details', this.props.serverStatusClass)}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.serverFqdn}>{this.props.serverName}</Label>
                    <Icon 
                        className={classNames('disk-icon')} 
                        iconName={'icon-LoadWithErrors'} 
                        title={'Disks\n' + this._createTooltipText(this.props.disks)}/>
                    { this.props.numberOfUsers && 
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-User'}
                            title={this.props.numberOfUsers + ' number of users online'}/>
                    }
                    {this.props.hasCloseButton && 
                        <Icon disabled={ false }
                            className={'dialog-button dialog-button-close'}
                            onClick={this._dismiss.bind(this)} 
                            iconName={'icon-Delete'}/>
                    }
                    <hr/>
                </div>
                {this.props.children}
                <div className={'counters-container'}>
                    {this._createCountersTiles(this.props.countersData)}
                </div>
            </div>
        );
    }

    private _dismiss() {
        this.props.onDismiss(this.props.serverId);
    }
    
    private _createCountersTiles(data: Array<IServerCountersData>) : Array<JSX.Element> {
        return data.map(
            (d: IServerCountersData) => 
                <div className={'tile'} title={this._createTooltipText(d.totalUsage)}>
                    <p>{d.title}</p>
                    <Label className={d.status}>{d.currentUsage}</Label>
                    <Label className={d.status}>{d.usageUnit}</Label>
                </div>
        );
    }

    private _createTooltipText(arr: Array<string>) : string {
        let data = '';
        for (let i = 0; i < arr.length; i++) {
            data += arr[i] + '\n';
        }
        return data;
    }
}
