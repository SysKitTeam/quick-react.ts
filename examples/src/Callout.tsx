/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Callout } from './../../src/components/Callout/Callout';
import { autobind } from '../../src/utilities/autobind';
import { DirectionalHint } from '../../src/utilities/DirectionalHint';

export class Index extends React.Component<any, any> {
    private el: HTMLDivElement;

    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            message: 'This is very very very long message'
        };

        setTimeout(() => this.setState({ message: 'message' }), 5000);
    }

    @autobind
    private _setRef(el) {
        this.el = el;
        this.setState({ isMounted: true });
    }

    public render() {
        return (
            <div>
                <div ref={this._setRef}
                    style={{ padding: '5px', backgroundColor: 'lightyellow', width: '800px', border: '1px solid darkblue' }}
                >
                    Sample div
                </div>
                {
                    this.state.isMounted &&
                    <Callout
                        target={this.el}
                        useTargetPoint={true}
                        directionalHint={DirectionalHint.bottomLeftEdge}
                        isBeakVisible={true}
                    >
                        {this.state.message}
                    </Callout>
                }
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
