import * as React from 'react';
import {IDashboardProps} from './Dashboard.Props';
import {DashboardHeader} from '../DashboardHeader/DashboardHeader';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
import './Dashboard.scss';

import {autobind} from '../../utilities/autobind';
 

 
export class Dashboard extends React.Component<IDashboardProps, any> {
    
    constructor(props?: IDashboardProps) {
        super(props);
        this.state = {
            activeView: props.activeView
        };
    }
   

    @autobind
    changeView(item) {
        this.setState({activeView: parseInt(item.key.trim().replace('.', ''))});
    }

    render() {
        let {farms} = this.props;
        return(
            <div>
                {this.state.activeView}
                 <DashboardHeader filter={''} title={farms.title} onViewChange={this.changeView}/>
                 <CompactDashboard filter={''} className={'viewport-height'} title={farms.title} farms={farms.farms}/>
            </div>
        );
    }
    
}
