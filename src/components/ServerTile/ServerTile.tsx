import * as React from 'react';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IServerTileProps, ITileData } from './ServerTile.Props';
import { Icon } from '../Icon/Icon';
import { ServerStatus } from '../../models';
import { autobind } from '../../utilities/autobind';
import { GetClassForStatus } from '../../utilities/server';

import './ServerTile.scss';

export class ServerTile extends React.PureComponent<IServerTileProps, any> {
    constructor(props?: IServerTileProps) {
        super(props);
    }

    public render() {     
        let className = GetClassForStatus('server-details', this.props.status);
        return (
            <div className={className} onClick={this.serverOnClick}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.name}>{this.props.name}</Label>
                    <Icon
                        className={classNames('disk-icon')}
                        iconName={'icon-sql_log'}
                        title={'Disks\n' + Uitlity.CreateTooltipText(this.props.diskInformation)} />
                    {this.props.numberOfUsers &&
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-user'}
                            title={this.props.numberOfUsers + ' number of users online'} />
                    }
                    {this.props.onClose &&
                        <Icon disabled={false}
                            className={'dialog-button dialog-button-close'}
                            onClick={this.dismiss.bind(this)}
                            iconName={'icon-delete'} />
                    }
                    {this.props.children}
                </div>
                <div className={'counters-container'}>
                    {
                        this.props.countersData.map((data: ITileData, index) => 
                            <CounterTile key={index} {...data} />
                        )
                    }
                </div>
            </div>
        );
    }

    @autobind
    private serverOnClick() {
        const {id, serverOnClick} = this.props;
        if (serverOnClick) {
            serverOnClick(id);
        }
    }

    private dismiss() {
        this.props.onClose(this.props.id);
    } 
}

class CounterTile extends React.PureComponent<ITileData, any> {
    public render() {
        const statusClass =  GetClassForStatus('', this.props.status);
        return (
            <div className={'tile'} title={Uitlity.CreateTooltipText(this.props.hoverText)}>
                <p>{this.props.title}</p>
                <Label className={ statusClass }>{this.props.currentUsage}</Label>
                <Label className={ statusClass }>{this.props.usageUnit}</Label>
            </div>
        );
    }
}

class Uitlity {   
    public static CreateTooltipText(arr: Array<string>): string {
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
