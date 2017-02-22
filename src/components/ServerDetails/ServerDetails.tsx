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
        return (
            <div className={'server-details'}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.fqdmServerName}>{this.props.serverName}</Label>
                    <Icon className="disk-icon" iconName={'icon-LoadWithErrors'} title={'Disks\n' + this._createTooltipText(this.props.headerDiskData.disksInfo)}></Icon>
                    { this.props.numberOfUsers && 
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-User'}
                            title={this.props.numberOfUsers + ' number of users online'}
                        ></Icon>
                    }
                <Icon className={'server-type-icon'} id={this.props.serverType} iconName={this.props.serverTypeIcon}></Icon>
                
                { /* DODATI KOMPONENTU */ }
                 </div>
                <div className={'tile'}>
                    CPU
                    <Label>{this.props.cpuData.cpuUtilization}</Label>
                </div>
                <div className={'tile'} 
                        title={this.props.memoryData.committedMemory}>
                    Memory
                    <Label>{this.props.memoryData.memoryUsage}</Label>
                </div>
                <div className={'tile'} 
                        title={this._createTooltipText(this.props.diskData.rwSpeedsPerPartition)}>
                    Disk
                    <Label>{this.props.diskData.currentRWSpeed}</Label>
                </div>
                <div className={'tile'} 
                        title={this._createTooltipText(this.props.networkData.speedsPerInterface)}>
                    Network
                    <Label>{this.props.networkData.currentSpeed}</Label>
                </div>
            </div>
        );
    }

    private _createList(arr: string[]) : JSX.Element {
        const items = arr.map((data: string) => <li><Label className={'tooltip-label'}>{data}</Label></li>);
        return <ul>{items}</ul>;
    }

    private _createTooltipText(arr: string[]) : string {
        let data = '';
        for (let i = 0; i < arr.length; i++) {
            data += arr[i] + '\n';
        }
        return data;
    }
}
