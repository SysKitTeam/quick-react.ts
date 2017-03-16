/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components/Test/Test';
import { Button } from './components/Button/Button';
import { ButtonType } from './components/Button/Button.Props';
import { Icon } from './components/Icon/Icon';
import { Dropdown } from './components/Dropdown/Dropdown';
import { DropdownType } from './components/Dropdown/Dropdown.Props';
import { LeftNavigation } from './components/LeftNavigation/LeftNavigation';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { Ribbon } from './components/Ribbon/Ribbon';
import { History } from './components/History/History';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Label } from './components/Label/Label';
import { Callout } from './components/Callout/Callout';
import { ContextualMenu } from './components/ContextualMenu/ContextualMenu';
import { DirectionalHint } from './utilities/DirectionalHint';
import { IPoint } from './utilities/IPoint';
import { ChoiceGroup } from './components/ChoiceGroup/ChoiceGroup';
import { AddToFavorites } from './components/AddToFavorites/AddToFavorites';
import { TextField } from './components/TextField/TextField';
import { Spinner } from './components/Spinner/Spinner';
import { SpinnerType } from './components/Spinner/Spinner.Props';
import { Slider } from './components/Slider/Slider';
import { MessageBar } from './components/MessageBar/MessageBar';
import { MessageBarType } from './components/MessageBar/MessageBar.Props';
import { Search } from './components/Search/Search';
import { Pivot } from './components/Pivot/Pivot';
import { PivotItem } from './components/Pivot/PivotItem';
import { Dialog } from './components/Dialog/Dialog';
import { DialogFooter } from './components/Dialog/DialogFooter';
import { StatusBar } from './components/StatusBar/StatusBar';
import { CheckboxList } from './components/CheckboxList/CheckboxList';
import { Treeview } from './components/Treeview/Treeview';
import { CompactDashboard } from './components/CompactDashboard/CompactDashboard';
import { ICompactServerProps } from './components/CompactServer/CompactServer.Props';
import { TagContainer } from './components/TagContainer/TagContainer';
import { CompactServer } from './components/CompactServer/CompactServer';
import { DashboardHeader } from './components/DashboardHeader/DashboardHeader';
import { Dashboard } from './components/Dashboard/Dashboard';
import { dummyDashboard, generateMeasures, generateRandomStatus, convertFarm } from './mockData/DashboardDummy';
import { ServerTile } from './components/ServerTile/ServerTile';
import { elements } from './treeviewElements';
import { ToggleSwitch } from './components/ToggleSwitch/ToggleSwitch';
import { LineChart } from './components/LineChart/LineChart';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { PieChart } from './components/PieChart/PieChart';
import { DataGenerator } from './utilities/DataGenerator';
import {IFarm , ISharePointServer, ServerStatus} from './models';
import { BarChart } from './components/BarChart/BarChart';
import { data, updatedData } from './/mockData/barChart';
import { IBarChartData } from './components/BarChart/BarChart.props';

export class Index extends React.PureComponent<any, any> {
    constructor() {
        super();
        let pieData = [];
        this.state = {
            data: data
        };

        // setInterval(() => this.setState({ data: updatedData }), 3000);
    }

    public render() {
        return (
            <div>
                <BarChart 
                    id={'bar-chart-1'} 
                    data={this.state.data} 
                    dimensions={{width: '75%', height: '300px'}} 
                    onClick={data => console.log(data)} />
            </div>);
    };
};

ReactDOM.render(<Index />, document.getElementById('root'));
