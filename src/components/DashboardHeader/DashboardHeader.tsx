import * as React from 'react';
import { IDashboardHeaderProps } from './DashboardHeader.Props';
import { Search } from '../Search/Search';
import { Pivot } from '../Pivot/Pivot';
import { PivotItem } from '../Pivot/PivotItem';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import './DashboardHeader.scss';


export class DashboardHeader extends React.Component<IDashboardHeaderProps, any> {

    constructor(props?: IDashboardHeaderProps) {
        super(props);
    }

    render() {
        let { hasAddFarmButton, title } = this.props;
        return (
            <div className="dashboard-header-container">
                <span className={classNames('dashboard-header-title-container', this.props.headerClass)}>
                    <span className={'dashboard-header-title'} title={title}>{title}</span>
                    {
                        hasAddFarmButton && 
                        <Icon className={'add-farm'} iconName={'icon-Add'} onClick={this.props.onAddFarmClick} title={'Add farm'}/>
                    }
                </span>
                <Search onSearch={this.props.onSearch} onChange={this.props.onChanged} value={this.props.filter} />
                <div style={{ display: 'inline-block' }}>&nbsp;</div>

                <Pivot onLinkClick={this.props.onViewChange}>
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

