import 'babel-polyfill';
import 'ts-helpers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Resizable from 'react-resizable-box';
import { Dropdown, DropdownType } from '../../src/components/Dropdown';
import { Button } from '../../src/components/Button';
import { QuickGrid, IQuickGridProps, SortDirection, GridColumn } from '../../src/components/QuickGrid';
import { gridColumns1, getGridData1, gridColumns2, getGridData2 } from '../MockData/gridData';
import '../../src/components/TreeFilter/TreeFilter.scss'; // used for react-resizable style

const numOfRows = 10000;
export class Index extends React.Component<any, any> {
    state = {
        data: getGridData1(numOfRows),
        columns: gridColumns1,
        groupBy: [],
        selectedData: 1
    };

    public render() {
        return (
            <div>
                <div style={{ 'width': '150px' }}>
                    <Dropdown
                        hasTitleBorder={true}
                        dropdownType={DropdownType.selectionDropdown}
                        label="Data:"
                        onClick={this.onDropdownDataChange}
                        selectedKey={this.state.selectedData}
                        options={
                            [
                                { key: 1, text: '5 Columns' },
                                { key: 2, text: '2 Columns' }
                            ]}
                    />
                </div>
                <Button onClick={this.refreshData}>Refresh data</Button>

                <Resizable width={1000} height={700} >
                    <div className="viewport-height" style={{ height: '100%', border: '1px solid #6b6b6b' }} >
                        <QuickGrid
                            rows={this.state.data}
                            columns={this.state.columns}
                            groupBy={this.state.groupBy}
                            displayGroupContainer={true}
                            onGroupByChanged={this.groupByChanged}
                        />
                    </div>
                </Resizable>
            </div >
        );
    }

    onDropdownDataChange = (option, index) => {
        if (option.key === 1) {
            this.setState({
                data: getGridData1(numOfRows),
                columns: gridColumns1,
                selectedData: 1,
                groupBy: []
            });

        } else {
            this.setState({
                data: getGridData2(numOfRows),
                columns: gridColumns2,
                groupBy: [],
                selectedData: 2
            });
        }
    }

    refreshData = () => {
        this.setState((oldState) => ({ ...oldState, data: oldState.selectedKey === 1 ? getGridData1(numOfRows) : getGridData2(numOfRows) }));
    }

    groupByChanged = (groupBy) => {
        // tslint:disable-next-line:no-console
        console.log(groupBy);
        this.setState((oldState) => ({ ...oldState, groupBy: groupBy }));
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
