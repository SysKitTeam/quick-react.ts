/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Treeview } from './../../src/components/Treeview/Treeview';
import { elements } from './../MockData/treeviewElements';
import { ITreeviewItem } from '../../src/components/Treeview/TreeviewItem.Props';
import { autobind } from './../../src/utilities/autobind';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            treeviewElements: elements
        };
    }
    public render() {
        return (
            <div>
                <Treeview
                    expandOnClick={true}
                    onSelect={this._onCheckboxListChange}
                    showCheckbox={false}
                    items={this.state.treeviewElements}
                    onExpand={this._onExpand}
                />
                <br />
                {/* <Treeview onSelect={this._onTreeviewItemClick.bind(this)} showCheckbox={true} items={this.state.treeviewElements} recursive={false} /> */}
                <br />
            </div>
        );
    }

    @autobind
    private _onExpand(itemId: string, expanded: boolean) {
        // console.log('on expand: ', itemId, 'expanded: ', expanded);
        let { treeviewElements } = this.state;

        // console.log('treeview elements: ', this.state);

        const changedElements = treeviewElements.map((element: ITreeviewItem, index: number) => {
            if (element.id === itemId) {
                console.log('found changed: ', element);
                let el = { ...element, isOpen: expanded };
                console.log(el === element);
                return el;
            }
            return element;
        });

        // console.log(treeviewElements === changedElements);

        // console.log('changed elements: ', changedElements);

        // for (let i = 0; i < treeviewElements.length; i++) {
        //     console.log(treeviewElements[i] === changedElements[i]);
        // }

        this.setState({
            treeviewElements: changedElements
        });
    }

    private _onTreeviewItemClick(ev, itemId, checked) {
        console.log('checking : ', itemId, checked);
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
        console.log('checking : ', itemId, checked);
    }

}
ReactDOM.render(<Index />, document.getElementById('root'));
