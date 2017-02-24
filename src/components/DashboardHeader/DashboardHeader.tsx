import * as React from 'react';
import { IDashboardHeaderProps } from './DashboardHeader.Props';
import { Search } from '../Search/Search';
import { Pivot } from '../Pivot/Pivot';
import { PivotItem } from '../Pivot/PivotItem';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import './DashboardHeader.scss';


export class DashboardHeader extends React.Component<IDashboardHeaderProps, any> {

    public static defaultProps: IDashboardHeaderProps = {
        title: '',
        filter: '',
        hasAddFarmButton: true,
        iconName: 'icon-Add',
        onViewChange: () => {}
    };

    constructor(props?: IDashboardHeaderProps) {
        super(props);
    }

    render() {
        let { iconName, hasAddFarmButton, title } = this.props;
        return (
            <div className="dashboard-header-container">
                <span className="dashboard-header-title-container">
                    <span className="dashboard-header-title" title={title}>{title}</span>
                    {
                        hasAddFarmButton && 
                        <Icon className={'add-farm'} iconName={iconName} onClick={this.props.onAddFarmClick} title={'Add farm'}/>
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

