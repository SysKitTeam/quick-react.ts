import * as React from 'react';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IServerTileProps, ITileData } from './ServerTile.Props';
import { Icon } from '../Icon/Icon';
import {ServerStatus} from '../../models';
import './ServerTile.scss';
   
export class ServerTile extends React.PureComponent<IServerTileProps, any> {

    constructor(props?: IServerTileProps) {
        super(props);
    }

    public render() { 
         let isCritical = this.props.status === ServerStatus.Critical;
         let isWarning = this.props.status === ServerStatus.Warning;
         let isOK = this.props.status === ServerStatus.OK;
         let className = classNames('server-details',
                        {'status-warning': isWarning}, 
                        {'status-ok': isOK}, 
                        {'status-critical': isCritical});
        return (
            <div className={className}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.id.FQDN}>{this.props.name}</Label>
                    <Icon 
                        className={classNames('disk-icon')} 
                        iconName={'icon-LoadWithErrors'} 
                        title={'Disks\n' + this.createTooltipText(this.props.diskInformation)}/>
                    { this.props.numberOfUsers && 
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-User'}
                            title={this.props.numberOfUsers + ' number of users online'}/>
                    }
                    {this.props.hasCloseButton && 
                        <Icon disabled={ false }
                            className={'dialog-button dialog-button-close'}
                            onClick={this.dismiss.bind(this)} 
                            iconName={'icon-Delete'}/>
                    }
                    {this.props.children}
                    <hr/>
                </div>                
                <div className={'counters-container'}>
                    {this.createCountersTiles(this.props.countersData)}
                </div>
            </div>
        );
    }

    private dismiss() {
        this.props.onClose(this.props.id);
    }
    
    private createCountersTiles(collection: Array<ITileData>) : Array<JSX.Element> {

        return collection.map(
            (data: ITileData, index) => 
                <div key={index} className={'tile'} title={this.createTooltipText(data.hoverText)}>
                    <p>{data.title}</p>
                    <Label className={classNames(
                        {'status-warning': data.status === ServerStatus.Warning}, 
                        {'status-ok':  data.status === ServerStatus.OK},  
                        {'status-critical':  data.status === ServerStatus.Critical})}>{data.currentUsage}</Label>
                    <Label className={classNames(
                        {'status-warning': data.status === ServerStatus.Warning}, 
                        {'status-ok':  data.status === ServerStatus.OK}, 
                        {'status-critical':  data.status === ServerStatus.Critical})}>{data.usageUnit}</Label>
                </div>
        );
    }

    private createTooltipText(arr: Array<string>) : string {
        let data = '';
        for (let i = 0; i < arr.length; i++) {
            data += arr[i] + '\n';
        }
        return data;
    }
}
