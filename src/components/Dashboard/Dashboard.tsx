import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
import './Dashboard.scss';

import { autobind } from '../../utilities/autobind';


function sortFarms(ob1: { farmName: string }, ob2: { farmName: string }) {
    if (ob1.farmName < ob2.farmName) {
        return -1;
    }

    if (ob1.farmName > ob2.farmName) {
        return 1;
    }
    return 0;
}

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
        let {farms, headerClass, hasAddFarmButton} = this.props;
        let {filter, activeView} = this.state;
        return (
            <div>
                <DashboardHeader 
                    hasAddFarmButton={hasAddFarmButton}
                    onAddFarmClick={this.props.addFarm}
                    onChanged={this.changeSearchFilter} 
                    filter={filter} 
                    title={farms.title} 
                    onViewChange={this.changeView} 
                    headerClass={headerClass}/>
                {
                    (activeView === 1 || activeView === 0) &&
                    <CompactDashboard 
                        groupOnClick={this.props.groupOnClick}
                        filter={filter} 
                        className={'viewport-height'} 
                        title={farms.title} 
                        farms={farms.farms.sort(sortFarms)} 
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
