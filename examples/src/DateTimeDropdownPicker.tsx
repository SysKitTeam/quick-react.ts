/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DateTimeDropdownPicker } from '../../src';
import moment = require('moment');

export class Index extends React.Component<any, any> {
    constructor(props) {
        super(props);
        const today: Date = moment().toDate();
        this.state = {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90)
        };
    }

    public isValidaDate = (date: Date) => {
        return date >= moment().toDate();
    }

    public render() {
        return (
            <div>
                <DateTimeDropdownPicker
                    selectedDate = {this.state.date}
                    onTimeSelectionChanged={(newDate) => this.setState({date: newDate})}
                    isValidDate={this.isValidaDate.bind(this)}
                ></DateTimeDropdownPicker>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
