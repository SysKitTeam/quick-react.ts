import * as React from 'react';
import * as classNames from 'classnames';
import { Details } from '../Details/Details';
import { Label } from '../Label/Label';
import { IServerDetailsProps } from './ServerDetails.Props';
import { Icon } from '../Icon/Icon';
import './ServerDetails.scss';

export class ServerDetails extends React.PureComponent<IServerDetailsProps, any> {

    constructor(props?: IServerDetailsProps) {
        super(props);
    }

    public render() {
        const name = this._checkNameLen(this.props.serverName);

        return (
            <div className={'server-details'}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.fqdmServerName}>{name}</Label>
                    <Icon className="disk-icon" iconName={'icon-LoadWithErrors'} title={'Disks\n' + this._createTooltipText(this.props.headerDiskData.disksInfo)}></Icon>
                    { this.props.numberOfUsers && 
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-User'}
                            title={this.props.numberOfUsers + ' number of users online'}
                        ></Icon>
                    }
                    {this.props.hasCloseButton && 
                        <Icon disabled={ false }
                            className={'dialog-button dialog-button-close'}
                            onClick={this._dismiss.bind(this)} 
                            iconName={'icon-Delete'}/>}
                    <hr/>
                </div>
                {this.props.children}
                <div className={'counters-container'}>
                <div className={'tile'}>
                    <p>CPU</p>
                    <Label>{this.props.cpuData.cpuUtilization}</Label>
                    <Label>%</Label>
                </div>
                <div className={'tile'} title={this.props.memoryData.committedMemory}>
                    <p>Memory</p>
                    <Label>{this.props.memoryData.memoryUsage}</Label>
                    <Label>{this.props.memoryData.memoryUsageUnit}</Label>
                </div>
                <div className={'tile'} title={this._createTooltipText(this.props.diskData.rwSpeedsPerPartition)}>
                    <p>Disk</p>
                    <Label>{this.props.diskData.currentRWSpeed}</Label>
                    <Label>{this.props.diskData.rwSpeedUnit}</Label>
                </div>
                <div className={'tile'} title={this._createTooltipText(this.props.networkData.speedsPerInterface)}>
                    <p>Network</p>
                    <Label>{this.props.networkData.currentSpeed}</Label>
                    <Label>{this.props.networkData.currentSpeedUnit}</Label>
                </div>
                </div>
            </div>
        );
    }

    private _dismiss() {
        this.props.onDismiss(this.props.serverId);
    }

    private _checkNameLen(name: string) : string {
        if (name.length > 15) {
            if (name.indexOf('.') !== -1 && name.indexOf('.') < 16) {
                name = name.substr(0, name.indexOf('.') + 1);
            } else {
                name = name.substr(0, 16) + '...';
            }                
        }
        return name;
    }

    private _createTooltipText(arr: string[]) : string {
        let data = '';
        for (let i = 0; i < arr.length; i++) {
            data += arr[i] + '\n';
        }
        return data;
    }
}
