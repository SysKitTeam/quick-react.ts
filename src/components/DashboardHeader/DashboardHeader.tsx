import * as React from 'react';
import {IDashboardHeaderProps} from './DashboardHeader.Props';
import {Search} from '../Search/Search';
import { Pivot } from '../Pivot/Pivot';
import { PivotItem } from '../Pivot/PivotItem';
import { Label } from '../Label/Label';
import './DashboardHeader.scss';
 

export class DashboardHeader extends React.Component<IDashboardHeaderProps, any> {

    constructor(props?: IDashboardHeaderProps) {
        super(props);
    }
    render() {
        return(
            <div className="dashboard-header-container">
                <span className="dashboard-header-title">{this.props.title}</span> 
                <Search value={this.props.filter} />
                <div style={{display:'inline-block'}}>&nbsp;</div>
                
                <Pivot  onLinkClick={this.props.onViewChange}>
                    <PivotItem linkText={'Compact Horizontal'} >                        
                    </PivotItem>
                    <PivotItem linkText={'Compact Vertical'}>                        
                    </PivotItem>
                    <PivotItem linkText={'Tiles'} >
                    </PivotItem>
                    <PivotItem linkText={'Grid'} >
                    </PivotItem>
                </Pivot>
            </div>
        );
    }
}

