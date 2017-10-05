/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './../../src/components/Button/Button';
import { Dialog } from './../../src/components/Dialog/Dialog';
import { DialogFooter } from './../../src/components/Dialog/DialogFooter';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = { showDialog: false, showDialog2: false };
    }

    public render() {
        return (
            <div>
                <Button onClick={this._toggleDialog.bind(this)}>Open Dialog</Button> <br /><br />
                <Button onClick={this._toggleDialog2.bind(this)}>Open Dialog2</Button>

                <Dialog
                    isOpen={this.state.showDialog}
                    onDismiss={this._toggleDialog.bind(this)}
                    title={'All emails together'}
                    subText={'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'}>
                    <DialogFooter>
                        <Button className={'button-textual'} onClick={this._toggleDialog.bind(this)}>Cancel</Button>
                        <Button className={'button-primary'} onClick={this._toggleDialog.bind(this)}>Save</Button>
                    </DialogFooter>
                </Dialog>

                <Dialog
                    isOpen={this.state.showDialog2}
                    onDismiss={this._toggleDialog2.bind(this)}
                    title={'Warning'}
                    icon={'icon-warning'}
                    subText={'This is warning message and you have to fix it!'}>
                    <DialogFooter>
                        <Button className={'button-textual'} onClick={this._toggleDialog2.bind(this)}>Cancel</Button>
                        <Button className={'button-primary'} onClick={this._toggleDialog2.bind(this)}>Save</Button>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private _toggleDialog() {
        this.setState({ showDialog: !this.state.showDialog });
    }

    private _toggleDialog2() {
        this.setState({ showDialog2: !this.state.showDialog2 });
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
