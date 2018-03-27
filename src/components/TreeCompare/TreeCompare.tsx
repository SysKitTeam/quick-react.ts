import * as React from 'react';
import { ITreeCompareProps, ITreeCompareState, treeCompareColumns } from './TreeCompare.props';
import { TreeGrid, TreeDataSource, GridColumn } from '../..';
import './TreeCompare.scss';
import { tree } from 'd3';
import { Grid } from 'react-virtualized';

export class TreeCompare extends React.PureComponent<ITreeCompareProps, ITreeCompareState> {
    public constructor(props: ITreeCompareProps) {
        super(props);

        this.state = {
            dataSource: new TreeDataSource(props.rows),
            compareColumns: this.generateColumns(props.columns)
        };
    }

    public componentWillReceiveProps(newProps: ITreeCompareProps) {
        if (this.props.columns !== newProps.columns || this.props.rows !== newProps.rows) {
            this.setState({
                dataSource: new TreeDataSource(newProps.rows),
                compareColumns: this.generateColumns(newProps.columns)
            });
        }
    }

    generateColumns = (columnDefinitions: Array<string>): Array<GridColumn> => columnDefinitions.map((column, index) => ({
        ...treeCompareColumns[index],
        headerText: column
    }))

    public render() {
        return (
            <div className="tree-compare-container">
                <TreeGrid
                    columns={this.state.compareColumns}
                    treeDataSource={this.state.dataSource}
                    isNodeSelectable={false}
                />
            </div>
        );
    }
}
