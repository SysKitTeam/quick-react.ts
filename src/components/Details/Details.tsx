import * as React from 'react';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import './Details.scss';

export interface IDetailsProps {
    serverName: string;
    diskStatus: string;
    userCount?: number;
    serverType: string;
}

export class Details extends React.Component<IDetailsProps, any> {

    constructor() {
        super();
    }

    public render() {

        return(
            <div className="details">
                <div className="header">
                    <Label className="server-name tooltip">{this.props.serverName}</Label>
                    <Icon className="disk" iconName={'icon-LoadWithErrors'}></Icon>
                </div>
                <div>
                    <Icon className="logo" iconName={'icon-World'}></Icon>
                    <Label className="server-type">{this.props.serverType}</Label>
                </div>
                <div>
                    <Icon className="logo" iconName={'icon-World'}></Icon>
                    <Label className="server-type">Web</Label>
                    <Icon className="logo" iconName={'icon-SharePoint'}></Icon>
                    <Label className="server-type">Sql</Label>
                    <Icon className="logo" iconName={'icon-SuperAdmin'}></Icon>
                    <Label className="server-type">Firewall</Label>
                    <Label className="server-type">...</Label>
                </div>
            </div>
        );
    }

}