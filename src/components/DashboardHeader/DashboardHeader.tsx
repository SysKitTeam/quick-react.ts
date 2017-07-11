import * as React from 'react';
import { IDashboardHeaderProps, IDashboardHeaderState, groupingOptions } from './DashboardHeader.Props';
import { Search } from '../Search/Search';
import { Pivot } from '../Pivot/Pivot';
import { PivotItem } from '../Pivot/PivotItem';
import { autobind } from '../../utilities/autobind';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import { FilteringBar } from '../FilteringBar/FilteringBar';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import './DashboardHeader.scss';

export class DashboardHeader extends React.PureComponent<IDashboardHeaderProps, IDashboardHeaderState> {

    constructor(props) {
        super(props);
        this.state = {
            filterMenuOpen: false,
            selectedFilterOptions: []
        };
    }

    @autobind
    private handleGroupingChange(option: IDropdownOption) {
        this.props.onGroupingChange(Number(option.key));
    }

    @autobind
    onFilteringChange() {
        this.setState({ ...this.state, filterMenuOpen: !this.state.filterMenuOpen });
        if (this.state.filterMenuOpen) {
            this.props.onFilteringOptionsChange([]);
        }
    }

    public render() {
        let { hasAddFarmButton, title, selectedDashboardKey } = this.props;
        return (
            <div className="dashboard-header-container">
                {this.props.pivotItems &&
                    <Pivot
                        className="dashboard-header-pivot"
                        onLinkClick={this.props.onViewChange}
                        selectedKey={selectedDashboardKey.toString()}
                    >{
                            Object.keys(this.props.pivotItems).map(key => (
                                <PivotItem
                                    key={key}
                                    linkText={this.props.pivotItems[key].linkText}
                                    itemKey={key}
                                    itemCount={this.props.pivotItems[key].itemCount} />
                            ))
                        }
                    </Pivot>
                }

                <Icon iconName="icon-filter" className="icon-filter-dashboard-header" onClick={this.onFilteringChange} />
                <Search onSearch={this.props.onSearch} onChange={this.props.onChanged} />
                <div className="grouping-dropdown-container">
                    <span className="grouping-dropdown-label">Group by</span>
                    <Dropdown
                        className="dashboard-grouping-header"
                        dropdownType={DropdownType.selectionDropdown}
                        selectedKey={this.props.selectedGrouping.toString()}
                        options={groupingOptions}
                        hasTitleBorder={true}
                        onClick={this.handleGroupingChange}>
                    </Dropdown>
                </div>
                <div style={{ display: 'inline-block' }}>&nbsp;</div>
                {this.state.filterMenuOpen &&
                    <FilteringBar
                        className="filtering-menu-container"
                        onFilteringOptionsChanged={this.props.onFilteringOptionsChange}
                    />
                }
            </div>
        );
    }
}
