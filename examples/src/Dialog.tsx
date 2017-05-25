/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './../../src/components/Button/Button';
import { ButtonType } from './../../src/components/Button/Button.Props';
import { Dialog } from './../../src/components/Dialog/Dialog';
import { DialogFooter } from './../../src/components/Dialog/DialogFooter';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = { showDialog: false };
    }

    public render() {
        return (
            <div>
                 <Button onClick={this._showDialog.bind(this)}>Open Dialog</Button>
                 <Dialog
                    isOpen={this.state.showDialog}
                    onDismiss={this._closeDialog.bind(this)}
                    title={'All emails together'}
                    subText={'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'}
                    containerClassName={'dialogMainOverride'}>
                    <DialogFooter>
                        <Button buttonType={ButtonType.primary} onClick={this._closeDialog.bind(this)}>Save</Button>
                        <Button onClick={this._closeDialog.bind(this)}>Cancel</Button>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private _showDialog() {
        this.setState({ showDialog: true });
    }

    private _closeDialog() {
        this.setState({ showDialog: false });
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
