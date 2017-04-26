/* tslint:disable:no-console */

import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './../../src/components/Button/Button';
import { ButtonType } from './../../src/components/Button/Button.Props';

const DraggableCore = require('react-draggable').DraggableCore;
import { autobind } from '../../src/utilities/autobind';


interface IResizableProps {
    width: number;
    name: string;
    onChanged: (name, width) => void;
}

interface IResizableState {
    width: number;
}

export class Resizable extends React.Component<IResizableProps, IResizableState> {
    private _width: number;
    constructor(props) {
        super(props);
        this.state = { width: this.props.width };
        this._width = this.props.width;
    }

    public render() {
        return (
            <div>
                <div style={{ display: 'inline', float: 'left'}}>
                    {this.props.children}
                </div>
                <DraggableCore
                    zIndex={100}
                    axis="x"
                    onStop={(e, data) => this.onDragHeaderStop(e, data, this.props.name)}
                    onDrag={this.onDrag}
                    position={{ x: 0, y: 0 }}>
                    <div
                        style={{ width: '5px', cursor: 'col-resize', display: 'inline', height: 20, backgroundColor: 'red' }}
                        className="grid-column-draggable">&nbsp;</div>
                </DraggableCore>
            </div>
        );
    }

    @autobind
    onDrag(e, data) {
        this._onDragHeaderColumn(e, data, this.props.name);
        // if (data.x > this.props.minWidth && e.clientX < this.props.maxWidth)         {
        //      this._onDragHeaderColumn(e, data, this.props.key); 
        // }
    }

    @autobind
    private onDragHeaderStop(e, data, key) {
        this.props.onChanged(key, this.state.width);
    }

    @autobind
    private _onDragHeaderColumn(e, data, columnIndex) {

        let newColumnWidths = this.state.width;
        newColumnWidths = newColumnWidths + data.deltaX;
        if (newColumnWidths < 0) {
            newColumnWidths = 0;
        }
        this.setState({ ...this.state, width: newColumnWidths });
        this.props.onChanged(this.props.name, this.state.width);
    }
}

export class Index extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { width: 100 };
    }

    @autobind
    change(name, width) {
        this.setState({ width: width });
    }

    @autobind
    restart() {
        this.setState({ width: 100 });
    }

    public render() {
        return (
            <Resizable
                width={this.state.width}
                name={'sth'}
                onChanged={this.change}
            >
                <div style={{ borderColor: 'black', borderWidth: 2, borderStyle: 'solid', width: this.state.width }}>
                    <Button
                        onClick={this.restart}
                    >
                        Button {this.state.width}
                    </Button>
                </div>
            </Resizable>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
