/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CustomDateRange } from './../../src/components/CustomDateRange/CustomDateRange';
import { Button } from '../../src/components/Button/Button';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = { isOpen: false };
    }

    public render() {
        return (
            <div>
                <Button onClick={this._toggleDialog.bind(this)}>Open CustomDateRange Dialog</Button> <br /><br />

                <CustomDateRange 
                    isDialogOpen={this.state.isOpen}
                    onDialogClose={this._toggleDialog.bind(this)}
                    startDate={new Date()}
                    endDate={new Date()}
                    onSave={() => console.log('Save clicked!')}>
                </CustomDateRange>
            </div>
        );
    }

    private _toggleDialog() {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
