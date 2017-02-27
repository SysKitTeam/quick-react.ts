import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
<<<<<<< HEAD
import { TileDashboard } from '../TileDashboard/TileDashboard';
=======
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
>>>>>>> origin/dashboard_improvements
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
        let nextView = -1;
        if (item.props.linkText.toLowerCase().trim().indexOf('tiles') !== -1 ) {
            nextView = ActiveDashboard.Tiles;
        } else  if (item.props.linkText.toLowerCase().trim().indexOf('compact horizontal') !== -1 ) {
            nextView = ActiveDashboard.CompactHorizontal;
        } else  if (item.props.linkText.toLowerCase().trim().indexOf('compact vertical') !== -1 ) {
            nextView = ActiveDashboard.CompactVertical;
        }
        this.setState({ activeView: nextView });
    }

    render() {
        let {compact, tiles, headerClass, hasAddFarmButton} = this.props;
        let {filter, activeView} = this.state;
        return (
            <div>
                <DashboardHeader 
                    onAddFarmClick={this.props.addFarm} headerClass={headerClass}  pivotItems={this.props.differentDashboards} hasAddFarmButton={hasAddFarmButton} onChanged={this.changeSearchFilter} filter={filter} title={compact.title} onViewChange={this.changeView} />
                {
                    (compact && (activeView === ActiveDashboard.CompactHorizontal || activeView ===  ActiveDashboard.CompactVertical)) &&
                    <CompactDashboard filter={filter} className={'viewport-height'} title={compact.title} farms={compact.farms} isVertical={activeView === ActiveDashboard.CompactVertical} />
                }
                {
                    (tiles && activeView === ActiveDashboard.Tiles) &&
                    <TileDashboard className={'viewport-height'} />

                }
            </div>
        );
    }

    @autobind
    private changeSearchFilter(newValue: any) {
        this.setState({ filter: newValue });
    }
}
