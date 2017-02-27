import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
import { TileDashboard } from '../TileDashboard/TileDashboard';
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
        let {compact, tiles} = this.props;
        let {filter, activeView} = this.state;
        return (
            <div>
                <DashboardHeader onChanged={this.changeSearchFilter} filter={filter} title={compact.title} onViewChange={this.changeView} />
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
