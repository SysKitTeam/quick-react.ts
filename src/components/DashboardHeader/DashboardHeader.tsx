import * as React from 'react';
import { IDashboardHeaderProps } from './DashboardHeader.Props';
import { Search } from '../Search/Search';
import { Pivot } from '../Pivot/Pivot';
import { PivotItem } from '../Pivot/PivotItem';
import { Label } from '../Label/Label';
import './DashboardHeader.scss';


export class DashboardHeader extends React.Component<IDashboardHeaderProps, any> {

    constructor(props?: IDashboardHeaderProps) {
        super(props);
    }
    render() {
        return (
            <div className="dashboard-header-container">
                <span className="dashboard-header-title">{this.props.title}</span>
                {this.props.pivotItems &&
                    <Pivot onLinkClick={this.props.onViewChange}>
                    {this.props.pivotItems.map((element, index) => (
                        <PivotItem key={index} linkText={element.linkText} linkIcon={element.linkIcon} itemKey={element.itemKey} itemCount={element.itemCount} >
                        </PivotItem>
                    ))
                    }
                </Pivot>
                }
                <Search onSearch={this.props.onSearch} onChange={this.props.onChanged} value={this.props.filter} />
            </div>
        );
    }
}

