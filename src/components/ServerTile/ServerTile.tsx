import * as React from 'react';
import { Details } from '../Details/Details';
import { Label } from '../Label/Label';
import './ServerTile.scss';

export interface IServerTileProps {
    cpu: number;
    ram: number;
    disk: number;
    network: number;
    status: string;
    serverName: string;
}

export class ServerTile extends React.Component<any, any> {

    constructor() {
        super();
    }

    public render() {
        const counterData = "counter-data";
        const counterInfo = "counter-info";

        let serverStatus;

        switch(this.props.status) {
            case "OK": 
                serverStatus = "server-tile-status-ok";
                break;
            case "Warning": 
                serverStatus = "server-tile-status-warning";
                break;
            default:
                serverStatus = "server-tile-status-error";
                break;
        }

        return (
            <div className="server-tile">
                <div className={serverStatus}></div>
                <Details serverName="ServerName123456" diskStatus="OK" serverType='Windows 2008 R2'></Details>
                <div className="row" style={{borderBottom: '1px solid #aeaeae', borderTop: '1px solid #aeaeae'}}>
                    <div className="col-2" style={{borderRight: '1px solid #aeaeae'}}>
                        <Label className={counterInfo}>CPU</Label>
                        <Label className={counterData}>{this.props.cpu}%</Label>
                    </div>
                    <div className="col-2">
                        <Label className={counterInfo}>Memory</Label>
                        <Label className={counterData}>{this.props.ram}</Label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2" style={{borderRight: '1px solid #aeaeae'}}>
                        <Label className={counterInfo}>Disk</Label>
                        <Label className={counterData}>{this.props.disk}</Label>
                    </div>
                    <div className="col-2">
                        <Label className={counterInfo}>Network</Label>
                        <Label className={counterData}>{this.props.net}</Label>
                    </div>
                </div>
            </div>
        );
    }

}