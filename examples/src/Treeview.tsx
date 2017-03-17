/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Treeview } from './../../src/components/Treeview/Treeview';
import { elements } from './../../src/treeviewElements';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            treeviewElements: elements        
        };
    };
    public render() {
        return (
            <div>
                <Treeview onSelect={this._onCheckboxListChange} showCheckbox={false} items={elements} />
                <br />
                <Treeview onSelect={this._onTreeviewItemClick.bind(this)} showCheckbox={true} items={this.state.treeviewElements} recursive={false} />
                <br />
            </div>
        );
    }

    private _onTreeviewItemClick(ev, itemId, checked) {
        this.setState({
            treeviewElements: this.state.treeviewElements.map((item) => {
                if (itemId.indexOf(item.id) > -1) {
                    return { id: item.id, text: item.text, parentId: item.parentId, checked: checked };
                } else {
                    return item;
                }
            })
        });
    }

    private _onCheckboxListChange(ev, itemId, checked) {
        console.log(checked);
    }

};
ReactDOM.render(<Index />, document.getElementById('root'));
