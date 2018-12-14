import * as React from 'react';
import { QuickGrid } from '../QuickGrid';

import * as _ from 'lodash';
import { GridColumn } from '../QuickGrid.Props';
import { Checkbox } from '../../Checkbox';

import './ColumnPicker.scss';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

export interface ColumnPickerProps {
    columns: Array<GridColumn>;
    pickedColumns?: Array<GridColumn>;

    onDismiss?(event?: React.MouseEvent<HTMLElement>);
    onChanged?(picked: Array<GridColumn>);
}

export interface ColumnPickerState {
    isColumnSelected: {[key: string]: boolean};
}


export default class ColumnPicker extends React.Component<ColumnPickerProps, ColumnPickerState> {

    public constructor(props: ColumnPickerProps) {
        super(props);
        this.state = {
            isColumnSelected: this.setVisibleColumns(props.columns, props.pickedColumns)
        };
    }

    private setVisibleColumns(columns: Array<GridColumn>, picked?: Array<GridColumn>): {[key: string]: boolean} {
        let visible: {[key: string]: boolean} = {};
        console.group("visible");
        columns.forEach(col => visible[col.valueMember] = !!!picked);
        console.log(visible);
        if (picked) {
            picked.forEach(col => visible[col.valueMember] = true);
            console.log(visible);
        }
        console.groupEnd();

        return visible;
    }

    private _renderRows(): React.ReactNode {
        return (
            <>
                {this.props.columns.map(column => this._renderRow(column))}
            </>
        );
    }

    private _renderRow(column: GridColumn): React.ReactNode {
        return (
            <div key={column.valueMember} className="column-picker__row">
                <Checkbox 
                    id={column.valueMember}
                    label={column.headerText} 
                    checked={this.state.isColumnSelected[column.valueMember]}
                    onChange={(ev, id, checked) => this._onChanged(column, checked)}
                />
            </div>
        );
    }

    private _onChanged = (column: GridColumn, checked: boolean) => {
        const newColumnSelected = {
            ...this.state.isColumnSelected,
            [column.valueMember]: checked
        };

        this.setState({
            isColumnSelected: newColumnSelected
        });

        this.props.onChanged(this.props.columns.filter(col => newColumnSelected[col.valueMember]));
    }

    public render(): React.ReactNode {
        return (
            <div className="column-picker-container">
                <div className="column-picker-container__header">
                    <span className="column-picker-container__title">Columns</span>
                    <Icon 
                        className="column-picker-container__close-button" 
                        iconName="svg-icon-close" 
                        onClick={this.props.onDismiss}
                    />
                </div>
                {this._renderRows()}
            </div>
        );
    }
}
