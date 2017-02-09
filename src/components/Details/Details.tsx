import * as React from 'react';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import { IDetailsProps } from './Details.Props';
import { IServerRole } from './Details.Props';
import './Details.scss';

export class Details extends React.Component<IDetailsProps, any> {

    constructor(props?: IDetailsProps) {
        super(props);
    }

    public render() {
        let hasMore = null;

        if(this.props.serverRoles.length > 3)
            hasMore = <div className='more-roles-container' style={{display: 'inline-block'}}>
                        <Label className='server-type'>...</Label>
                        <div className='details-tooltip'>
                            {this._getElementsForTooltip(this.props.serverRoles)}
                        </div>
                        </div>
        
        return(
            <div className="details">
                <div style={{margin: '4px 0px 4px 0px'}}>
                    <Icon className="logo" iconName={'icon-World'} style={{marginLeft: '5px'}}></Icon>
                    <Label className="server-type">{this.props.serverType}</Label>
                </div>
                <div className='server-roles-container'>
                    {this._getElementsForDisplay(this.props.serverRoles)}
                    {hasMore}
                </div>
            </div>
        );
    }

    private _getElementsForDisplay(attr: IServerRole[]) : JSX.Element[] {
        return attr.slice(0, 3).map(
            (data: IServerRole) => <div style={{display: 'inline-block', marginLeft: '5px'}}><Icon className='logo' iconName={data.icon}></Icon>
                <Label className="server-type">{data.roleName}</Label></div>
        );
    }

    private _getElementsForTooltip(attr: IServerRole[]) : JSX.Element {
        const items = attr.slice(3, attr.length)
                        .map((data: IServerRole) => 
                            <li>
                                <div style={{display: 'inline-block', whiteSpace: 'nowrap'}}>
                                    <Icon className='details-logo' iconName={data.icon} style={{display: 'inline-block'}}></Icon>
                                    <Label className='server-type-tooltip'>{data.roleName}</Label>
                                </div>
                            </li>);
        return <ul>{items}</ul>;
    }
}