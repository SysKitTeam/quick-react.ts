import * as React from 'react';
import * as classNames from 'classnames';
import { ICustomDateRangeProps, ICustomDateRangeState } from './CustomDateRange.Props';
import { Dialog } from '../Dialog/Dialog';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { DialogFooter } from '../Dialog/DialogFooter';
import { Button } from '../Button/Button';
import { autobind } from '../../index';
import { Icon } from '../Icon/Icon';
import * as moment from 'moment';
import './CustomDateRange.scss';

export class CustomDateRange extends React.PureComponent<ICustomDateRangeProps, ICustomDateRangeState> {
    constructor(props: ICustomDateRangeProps) {
        super(props);

        this.state = {
            startDate: props.startDate,
            endDate: props.endDate,
            currentSelectedCustomDateStartTime: props.startDate,
            currentSelectedCustomDateEndTime: props.endDate,
            invalidDateRangeSelected: true
        };
    }

    @autobind
    private _closeCustomDateRangeDialog() {
        if (this.props.onDialogClose !== undefined) {
            this.props.onDialogClose();
        }
    }

    @autobind
    private _saveCustomDateRangeDialog() {
        this._validateDate(moment(this.state.currentSelectedCustomDateStartTime), moment(this.state.currentSelectedCustomDateEndTime));
        if (this.state.invalidDateRangeSelected) {
            if (this.props.onSave !== undefined) {
                this.props.onSave();
            }    
        }

        this.setState({
            startDate: this.state.currentSelectedCustomDateStartTime,
            endDate: this.state.currentSelectedCustomDateEndTime
        });
        
        this._closeCustomDateRangeDialog();
    }

    @autobind
    private _startDateSelection(date: Date) {
        this.setState({
            currentSelectedCustomDateStartTime: date
        });
        this._validateDate(moment(date), moment(this.state.endDate));
    }

    @autobind
    private _endDateSelection(date: Date) {
        this.setState({
            currentSelectedCustomDateEndTime: date
        });
        this._validateDate(moment(this.state.startDate), moment(date));
    }

    @autobind
    private _validateDate(startDate: moment.Moment, endDate: moment.Moment) {
        if (startDate.isAfter(endDate)) {
            this.setState({
                invalidDateRangeSelected: false
            });
        } else {
            this.setState({
                invalidDateRangeSelected: true
            });
        }
    }

    private dateToString(d: Date): string {
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    }

    public render() {
        let {
            className,
            isDialogOpen
        } = this.props;

        const valid = (current) => {
            return current.isBefore(moment());
        };

        let startTimeText = this.dateToString(this.state.startDate);
        let endTimeText = this.dateToString(this.state.endDate);

        const dialogClassName = classNames(
            'custom-date-range-dialog',
            [this.props.className]
        );

        return (
            <Dialog
                isOpen={isDialogOpen}
                title="Select time range:"
                hasCloseXButton={true}
                onDismiss={this._closeCustomDateRangeDialog}
                containerClassName={dialogClassName}>
                <div className="custom-date-range-content">
                    <span className="custom-date-range-title">Start: <b>{startTimeText}</b></span>
                    <DateTimePicker
                        is24HourFormat={false}
                        selectedDateTime={this.state.startDate}
                        includeTime={true}
                        onTimeSelectionChanged={(date) => this._startDateSelection(date)}
                        useKeyboardForTimeInput={true}
                        isValidDate={valid}
                    />
                </div>
                <div className="custom-date-range-content">
                    <span className="custom-date-range-title">End: <b>{endTimeText}</b></span>
                    <DateTimePicker
                        is24HourFormat={false}
                        selectedDateTime={this.state.endDate}
                        includeTime={true}
                        onTimeSelectionChanged={(date) => this._endDateSelection(date)}
                        useKeyboardForTimeInput={true}
                        isValidDate={valid}
                    />
                </div>

                <DialogFooter>
                    {!this.state.invalidDateRangeSelected &&
                        <div className="custom-date-range-error">
                            <Icon iconName="icon-usklicnik" />
                            Start date cannot be after end date!
                        </div>
                    }
                    <Button className="button-textual" onClick={this._closeCustomDateRangeDialog}>Cancel</Button>
                    <Button onClick={this._saveCustomDateRangeDialog} disabled={!this.state.invalidDateRangeSelected}>Save</Button>
                </DialogFooter>
            </Dialog>
        );
    }
}
