import * as React from 'react';
import * as classNames from 'classnames';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownType } from '../Dropdown/Dropdown.Props';
import { Button } from '../Button/Button';
import { ButtonType } from '../Button/Button.Props';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';
import { autobind } from '../../utilities/autobind';
import * as moment from 'moment';


export interface IDateTimeDropdownPickerProps {
    selectedDate: Date;
    onTimeSelectionChanged?: (selectedDateTime: Date) => void;
    className?: string;
}

export interface IDateTimeDropDownPickerState {
    selectedDateCached: Date;
}

export class DateTimeDropdownPicker extends React.PureComponent<IDateTimeDropdownPickerProps, IDateTimeDropDownPickerState> {
    private _dropDown: Dropdown;
    constructor(props) {
        super(props);
        this.state = { selectedDateCached: moment().toDate() };
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
        const { onTimeSelectionChanged, className } = this.props;
        const { selectedDateCached } = this.state;

        return (
            <div className={className}>
                <Dropdown ref={this._setDropdownReference} onCustomSelectionText={this._customSelectionText}
                    hasTitleBorder={true}
                    dropdownType={DropdownType.customDropdown}
                    calloutClassName="dialog-dropdown-callout"
                    className="dialog-dropdown"
                >
                    <DateTimePicker
                        selectedDateTime={selectedDateCached}
                        is24HourFormat={false}
                        onTimeSelectionChanged={this._dateTimeChanged}
                    />
                    <div className="dropdown-buttons-container">
                        <Button onClick={this._cancelClicked}>Close</Button>
                        <Button buttonType={ButtonType.primary} onClick={this._flushChange}>OK</Button>
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
        onTimeSelectionChanged(this.state.selectedDateCached);
        this._closeDropDown();
    }

    @autobind
    private _dateTimeChanged(selectedDateTime: Date) {
        this.setState({ selectedDateCached: selectedDateTime });
    }

    @autobind
    private _customSelectionText(): string {
        const { selectedDate } = this.props;

        return moment(selectedDate, 'UTC').format('LLL');
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
