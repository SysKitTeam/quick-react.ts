import * as React from 'react';
import * as classNames from 'classnames';
import { ICustomDateRangeProps, ICustomDateRangeState } from './CustomDateRange.Props';
import { Dialog } from '../Dialog/Dialog';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { DialogFooter } from '../Dialog/DialogFooter';
import { Button } from '../Button/Button';
import { autobind } from '../../utilities/autobind';
import { Icon } from '../Icon/Icon';
import * as moment from 'moment';
import './CustomDateRange.scss';

export class CustomDateRange extends React.PureComponent<ICustomDateRangeProps, ICustomDateRangeState> {
    constructor(props: ICustomDateRangeProps) {
        super(props);

        this.state = {
            startDate: props.startDate,
            endDate: props.endDate,
            validDateRangeSelected: true
        };
    }

    public componentWillReceiveProps(newProps, nextState) {
        this.setState({
            startDate: newProps.startDate,
            endDate: newProps.endDate
        });
    }

    @autobind
    private _closeCustomDateRangeDialog() {
        if (this.props.onClose !== undefined) {
            this.props.onClose();
        }

        this.setState({
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            validDateRangeSelected: true
        });
    }

    @autobind
    private _saveCustomDateRangeDialog() {
        this._validateDate(moment(this.state.startDate), moment(this.state.endDate));
        if (this.state.validDateRangeSelected) {
            if (this.props.onSave !== undefined) {
                this.props.onSave(this.state.startDate, this.state.endDate);
            }
        }

        this._closeCustomDateRangeDialog();
    }

    @autobind
    private _startDateSelection(date: Date) {
        this.setState({
            startDate: date
        });
        this._validateDate(moment(date), moment(this.state.endDate));
    }

    @autobind
    private _endDateSelection(date: Date) {
        this.setState({
            endDate: date
        });
        this._validateDate(moment(this.state.startDate), moment(date));
    }

    @autobind
    private _validateDate(startDate: moment.Moment, endDate: moment.Moment) {
        this.setState({
            validDateRangeSelected: !startDate.isAfter(endDate)
        });
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
                    <div className="custom-date-range-title">Start: {startTimeText}</div>
                    <DateTimePicker
                        is24HourFormat={false}
                        selectedDateTime={this.state.startDate}
                        includeTime={true}
                        onTimeSelectionChanged={this._startDateSelection}
                        useKeyboardForTimeInput={true}
                        isValidDate={valid}
                    />
                </div>
                <div className="custom-date-range-content">
                    <div className="custom-date-range-title">End: {endTimeText}</div>
                    <DateTimePicker
                        is24HourFormat={false}
                        selectedDateTime={this.state.endDate}
                        includeTime={true}
                        onTimeSelectionChanged={this._endDateSelection}
                        useKeyboardForTimeInput={true}
                        isValidDate={valid}
                    />
                </div>

                <DialogFooter>
                    {!this.state.validDateRangeSelected &&
                        <div className="custom-date-range-error">
                            <Icon iconName="icon-usklicnik" />
                            Start date cannot be after end date!
                        </div>
                    }
                    <Button className="button-textual" onClick={this._closeCustomDateRangeDialog}>Cancel</Button>
                    <Button onClick={this._saveCustomDateRangeDialog} disabled={!this.state.validDateRangeSelected}>Save</Button>
                </DialogFooter>
            </Dialog>
        );
    }
}
