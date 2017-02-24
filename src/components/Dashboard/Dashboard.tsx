import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
import './Dashboard.scss';

import { autobind } from '../../utilities/autobind';



export class Dashboard extends React.Component<IDashboardProps, any> {

    constructor(props?: IDashboardProps) {
        super(props);
        this.state = {
            activeView: props.activeView,
            filter: props.filter
        };
    }


    @autobind
    changeView(item) {
        this.setState({ activeView: parseInt(item.key.trim().replace('.', ''), 10) });
    }

    render() {
        let {farms} = this.props;
        let {filter, activeView} = this.state;
        return (
            <div>
                <DashboardHeader 
                    hasAddFarmButton={true} 
                    onChanged={this.changeSearchFilter} 
                    filter={filter} 
                    title={farms.title} 
                    onViewChange={this.changeView} 
                    onAddFarmClick={this.props.addFarm}/>
                {
                    (activeView === 1 || activeView === 0) &&
                    <CompactDashboard 
                        filter={filter} 
                        className={'viewport-height'} 
                        title={farms.title} 
                        farms={farms.farms} 
                        isVertical={activeView === 1} />
                }

            </div>
        );
    }

    @autobind
    private changeSearchFilter(newValue: any) {
        this.setState({ filter: newValue });
    }
}
