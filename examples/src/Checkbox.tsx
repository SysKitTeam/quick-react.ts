/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Checkbox } from './../../src/components/Checkbox/Checkbox';

const $secondaryColor = '#4D4D4F';

export class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            checked: false,
            iconChecked: false,
            checkedWhite: false
        };
    }

    public render() {
        return (
            <div>
                <Checkbox
                    label={'This is checkbox'}
                    onChange={(ev, checked) => this._onChange()}
                    checked={this.state.checked}
                />
                <Checkbox
                    label={'This is disabled checkbox'}
                    disabled={true}
                    defaultChecked={true}
                />
                <Checkbox
                    label={'This is checkbox with icon'}
                    onChange={(ev, checked) => this._onCheckboxIconChange()}
                    iconClassName={'icon-user'}
                    checked={this.state.iconChecked}
                />

                <div style={{backgroundColor: $secondaryColor, paddingLeft: '10px'}}>
                    <Checkbox
                        label={'This is white checkbox'}
                        onChange={(ev, checked) => this._onWhiteChange()}
                        checked={this.state.checkedWhite}
                        className="checkbox-white"
                    />
                </div>

                <div style={{backgroundColor: $secondaryColor, paddingLeft: '10px'}}>
                    <Checkbox
                        label={'This is disabled white checkbox'}
                        disabled={true}
                        checked={this.state.iconChecked}
                        className="checkbox-white"
                    />
                </div>
            </div>
        );
    }

    private _onChange() {
        this.setState({ checked: !this.state.checked });
    }

    private _onCheckboxIconChange() {
        this.setState({ iconChecked: !this.state.iconChecked });
    }

    private _onWhiteChange() {
        this.setState({ checkedWhite: !this.state.checkedWhite });
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
