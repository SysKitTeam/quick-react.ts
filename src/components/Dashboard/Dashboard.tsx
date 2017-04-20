import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
import { TileDashboard } from '../TileDashboard/TileDashboard';
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { PivotItem } from '../Pivot/PivotItem';
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

    public render() {
        let {headerClass, hasAddButton} = this.props;
        let {filter, activeView} = this.state;

        return (
            <div className="dashboard">
                <DashboardHeader
                    onAddFarmClick={this.props.addFarm}
                    headerClass={headerClass}
                    pivotItems={this.props.differentDashboards}
                    hasAddFarmButton={hasAddButton}
                    onChanged={this.changeSearchFilter}
                    filter={filter}
                    title={this.props.title}
                    onViewChange={this.changeView}
                    selectedDashboardKey={activeView}
                />
                {
                    ((activeView === ActiveDashboard.CompactHorizontal || activeView === ActiveDashboard.CompactVertical)) &&
                    <CompactDashboard
                        filter={filter}
                        className={'viewport-height'}
                        title={this.props.title}
                        farms={this.props.farms}
                        isVertical={activeView === ActiveDashboard.CompactVertical}
                        groupEditFunc={this.props.groupEditFunc}
                        groupAddFunc={this.props.groupEditFunc}
                        groupDeleteFunc={this.props.groupDeleteFunc}
                        groupOnClick={this.props.groupOnClick}
                        serverRoleEdit={this.props.serverRoleEdit}
                        serverClose={this.props.serverClose}
                        serverOnClick={this.props.serverOnClick}
                    />
                }
                {
                    (activeView === ActiveDashboard.Tiles) &&
                    <TileDashboard
                        className={'viewport-height'}
                        farms={this.props.farms}
                        filter={filter}
                        groupEditFunc={this.props.groupEditFunc}
                        groupAddFunc={this.props.groupEditFunc}
                        groupDeleteFunc={this.props.groupDeleteFunc}
                        groupOnClick={this.props.groupOnClick}
                        serverRoleEdit={this.props.serverRoleEdit}
                        serverClose={this.props.serverClose}
                        serverOnClick={this.props.serverOnClick}
                    />
                }
            </div>
        );
    }

    @autobind
    changeView(item?: PivotItem, ev?: React.MouseEvent<any>) {
        this.setState({ activeView: Number(item.props.itemKey) });
    }

    @autobind
    private changeSearchFilter(newValue: string) {
        this.setState({ filter: newValue });
    }
}
