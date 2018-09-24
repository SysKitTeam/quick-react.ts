import * as React from 'react';
import {  ColumnFilterProps} from './QuickGrid.Props';
import './QuickGrid.scss';
import { TextField } from '../TextField';

export class ColumnFilter extends React.PureComponent<ColumnFilterProps, null> {
    private _filtersGrid: any;
    constructor(props: ColumnFilterProps) {
        super(props);
    }

    onChanged = (newValue: string) => {
        const { columnIndex} = this.props;
        if (!newValue) {
            this.props.removeColumnFilter({
                columnIndex: columnIndex,
                filterValue: ''
            });
        } else {
            this.props.addColumnFilter({
                columnIndex: columnIndex,
                filterValue: newValue
            });
        }
    }

    public render() {
        return (
            <TextField 
                className="filters-column"
                onChanged={this.onChanged}
                value={this.props.filterValue}
            />
        );
    }
}
