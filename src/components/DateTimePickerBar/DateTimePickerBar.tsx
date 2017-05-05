import * as React from 'react';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import { DateTimeDropdownPicker } from '../DateTimeDropdownPicker/DateTimeDropdownPicker';
import './DateTimePickerbar.scss';

export interface IDateTimePickerBarProperties {
    startDateTime: Date;
    endDateTime: Date;
    className?: string;
    startDateTimeChanged?: (newDateTime: Date) => void;
    endDateTimeChanged?: (newDateTime: Date) => void;
}

export class DateTimePickerBar extends React.PureComponent<IDateTimePickerBarProperties, void> {

    public render(): JSX.Element {
        const { startDateTime, endDateTime, className, startDateTimeChanged, endDateTimeChanged } = this.props;
        return (
            <div className="date-time-picker-bar">
                <div className="date-time-picker-option">
                    <div>End time:</div>
                    <DateTimeDropdownPicker
                        selectedDate={endDateTime}
                        onTimeSelectionChanged={endDateTimeChanged}
                        className="date-time-picker-dropdown"
                    />
                </div>
                <div className="date-time-picker-option">
                    <div>Start time:</div>
                    <DateTimeDropdownPicker
                        selectedDate={startDateTime}
                        onTimeSelectionChanged={startDateTimeChanged}
                        className="date-time-picker-dropdown"
                    />
                </div>
            </div>
        );
    }
}
