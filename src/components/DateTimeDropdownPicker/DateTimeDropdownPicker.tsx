import * as React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownType } from '../Dropdown/Dropdown.Props';
import { Button } from '../Button/Button';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { autobind } from '../../utilities/autobind';
import * as moment from 'moment';
import './DateTimeDropdownPicker.scss';

export interface IDateTimeDropdownPickerProps {
    selectedDate: Date;
    onTimeSelectionChanged?: (selectedDateTime: Date) => void;
    className?: string;
    includeTime?: boolean;
    isValidDate?: (currentDate: any, selectedDate: any) => boolean;
    isDisabled?: boolean;
}

export interface IDateTimeDropDownPickerState {
    selectedDateCached: Date;
}

export class DateTimeDropdownPicker extends React.PureComponent<IDateTimeDropdownPickerProps, IDateTimeDropDownPickerState> {
    private _dropDown: Dropdown;
    constructor(props) {
        super(props);
        this.state = { selectedDateCached: this.props.selectedDate ? this.props.selectedDate : moment().toDate() };
    }

    componentWillReceiveProps(nextProps: IDateTimeDropdownPickerProps) {
        if (this.props.selectedDate === nextProps.selectedDate) {
            return;
        }
        let date = nextProps.selectedDate;
        if (!date) {
            date = moment().toDate();
        }
        this.setState({ selectedDateCached: date });
    }

    public render(): JSX.Element {
        const { onTimeSelectionChanged, className, includeTime, isValidDate } = this.props;
        const { selectedDateCached } = this.state;

        return (
            <div className={className}>
                <Dropdown ref={this._setDropdownReference} onCustomSelectionText={this._customSelectionText}
                    hasTitleBorder={true}
                    dropdownType={DropdownType.customDropdown}
                    calloutClassName="dialog-dropdown-callout"
                    className="dialog-dropdown"
                    disabled={this.props.isDisabled}
                >
                    <DateTimePicker
                        selectedDateTime={selectedDateCached}
                        is24HourFormat={false}
                        onTimeSelectionChanged={this._dateTimeChanged}
                        includeTime={includeTime}
                        isValidDate={isValidDate}
                    />
                    <div className="dropdown-buttons-container">
                        <Button className={'button-textual'} onClick={this._cancelClicked}>Close</Button>
                        <Button className={'button-primary'} onClick={this._flushChange}>OK</Button>
                    </div>
                </Dropdown>
            </div>
        );
    }

    @autobind
    private _cancelClicked() {
        this._closeDropDown();
        this.setState({ selectedDateCached: this.props.selectedDate });
    }

    @autobind
    private _flushChange() {
        const { onTimeSelectionChanged } = this.props;
        if (onTimeSelectionChanged !== undefined) {
            onTimeSelectionChanged(this.state.selectedDateCached);
        }
        this._closeDropDown();
    }

    @autobind
    private _dateTimeChanged(selectedDateTime: Date) {
        this.setState({ selectedDateCached: selectedDateTime });
    }

    @autobind
    private _customSelectionText(): string {
        const { selectedDate, includeTime } = this.props;
        
        return includeTime ? moment(selectedDate, 'UTC').format('LLL') : moment(selectedDate, 'UTC').format('LL');
    }

    @autobind
    private _setDropdownReference(dropdown) {
        this._dropDown = dropdown;
    }

    @autobind
    private _closeDropDown() {
        this._dropDown.closeDropdown();
    }
}
