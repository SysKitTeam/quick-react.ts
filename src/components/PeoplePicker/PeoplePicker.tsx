import * as React from 'react';
import * as classNames from 'classnames';
import { IPeoplePickerProps } from './PeoplePicker.Props';
import { getId } from '../../utilities/getId';
import { autobind } from '../../utilities/autobind';
import { CommonComponent } from '../Common/Common';
import './PeoplePicker.scss';
import { Search } from '../Search/Search';

export interface IPeoplePickerState {
    value?: string;
    isFocused?: boolean;
    errorMessage?: string;
}

export class PeoplePicker extends CommonComponent<IPeoplePickerProps, IPeoplePickerState> {
    private _field;

    constructor(props) {
        super(props);

        this.state = {
            value: props.value || props.defaultValue || '',
            isFocused: false,
            errorMessage: ''
        };

        this._onInputChange = this._onInputChange.bind(this);
    }

    private _onInputChange(event: React.ChangeEvent<any>): void {
        const element: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
        const value: string = element.value;

        this.setState({
            value: value,
            errorMessage: ''
        } as IPeoplePickerState);

        console.log(value);
    }

    public render() {
        return (
            <div className="people-picker-container">
                <input
                    type={'text'}
                    ref={(c): HTMLInputElement => this._field = c}
                    value={this.state.value}
                    onChange={this._onInputChange}
                    className="people-picker-input"
                />
            </div>
        );
    }
}
