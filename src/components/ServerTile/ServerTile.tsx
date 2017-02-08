import * as React from 'react';
import * as classNames from 'classnames';
import { Details } from '../Details/Details';
import { Label } from '../Label/Label';
import { IServerTileProps } from './ServerTile.Props';
import { Icon } from '../Icon/Icon';
import { IDiskDetails } from './ServerTile.Props';
import './ServerTile.scss';

export class ServerTile extends React.Component<IServerTileProps, any> {

    constructor(props?: IServerTileProps) {
        super(props);
    }

    public render() {
        const counterInfo = "counter-info";

        const serverStatusClass = classNames({
            'server-tile-status-ok': this.props.serverStatus === 'OK',
            'server-tile-status-warning': this.props.serverStatus === 'Warning',
            'server-tile-status-error': this.props.serverStatus === 'Error'
        });

        let users = null;

        if(this.props.headerData.numberOfUsers)
            users = (<div className='st-users' style={{display: 'inline-block'}}>
                	    <div style={{display: 'inline-block'}}>
                            <Icon iconName={'icon-User'} style={{padding: '8px 0px 2px 0px'}}></Icon>
                            <Label style={{display: 'inline-block'}}>{this.props.headerData.numberOfUsers}</Label>
                        </div>
                        <div className='tooltip'>
                            <Label className='tooltip-label'>{this.props.headerData.numberOfUsers} users online</Label>
                        </div>
                    </div>);

        return (
            <div className='server-tile'>
                <div className={serverStatusClass}></div>
                <div className='header'>
                    <div className='tl-server-name-container'>
                        <Label className="server-name">{this.props.headerData.serverName}</Label>
                        <div className='tooltip'>
                            <Label className='tooltip-label'>{this.props.headerData.fqdmServerName}</Label>
                        </div>
                    </div>
                    
                    <div className='tl-disk-container' style={{display: 'inline-block'}}>
                        <Icon className="disk" iconName={'icon-LoadWithErrors'} style={{padding: '8px 5px 2px 5px'}}></Icon>
                        <div className='tooltip'>
                            {this._diskUsageList(this.props.headerData.diskData.disks)}
                        </div>
                    </div>
                   
                    
                    {users}
                </div>
                
                <Details serverType='Windows 2008 R2' serverIcon='icon-World' serverRoles={
                                                        [{roleName: 'Web', icon: 'icon-World'},
                                                        {roleName: 'SQL', icon: 'icon-Sql'},
                                                        {roleName: 'Firewall', icon: 'icon-Lock'},
                                                        {roleName: 'Hosting', icon: 'icon-World'}]}></Details>

                <div className='st-row' style={{borderBottom: '1px solid #aeaeae', borderTop: '1px solid #aeaeae'}}>
                    <div className="st-col-2-l" style={{borderRight: '1px solid #aeaeae'}}>
                        <Label className={counterInfo}>CPU</Label>
                        <Label className={this._calculateCounterStatus(this.props.cpuData.status)}>{this.props.cpuData.cpuUtilization}</Label>
                    </div>
                    <div className="st-col-2-r">
                        <Label className={counterInfo}>Memory</Label>
                        <Label className={this._calculateCounterStatus(this.props.memoryData.status)}>{this.props.memoryData.memoryUsage}</Label>
                        <div className='tooltip'>
                            <Label className='tooltip-label'>{this.props.memoryData.committedMemory}</Label>
                        </div>
                    </div>
                </div>
                <div className="st-row">
                    <div className="st-col-2-l" style={{borderRight: '1px solid #aeaeae'}}>
                        <Label className={counterInfo}>Disk</Label>
                        <Label className={this._calculateCounterStatus(this.props.diskData.status)}>{this.props.diskData.currentRWSpeed}</Label>
                        <div className='tooltip'>
                            {this._createList(this.props.diskData.rwSpeedsPerPartition)}
                        </div>
                    </div>
                    <div className="st-col-2-r">
                        <Label className={counterInfo}>Network</Label>
                        <Label className={this._calculateCounterStatus(this.props.networkData.status)}>{this.props.networkData.currentSpeed}</Label>
                        <div className='tooltip'>
                            {this._createList(this.props.networkData.speedsPerInterface)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private _calculateCounterStatus(status: string) : string {
        return classNames({
            'counter-data': true,
            'status-warning': status === 'Warning',
            'status-error': status === 'Error'
        });
    }

    private _createList(arr: string[]) : JSX.Element {
        const items = arr.map((data: string) => <li><Label className='tooltip-label'>{data}</Label></li>);
        return <ul>{items}</ul>;
    }

    private _diskUsageList(arr: IDiskDetails[]) : JSX.Element {
        const items = arr.map((data:IDiskDetails) => <li><Label className='tooltip-label'>{data.driveLetter} {data.sizeInUse} / {data.totalSize} GB ({data.filledPercentage})</Label></li>);
        return <ul>{items}</ul>;
    }

}