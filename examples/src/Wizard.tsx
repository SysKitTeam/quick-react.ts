/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactDOM from 'react-dom';

import Wizard from './../../src/components/Wizard/Wizard';
import {autobind} from './../../src/utilities/autobind';
import {steps} from './../MockData/WizardSteps';

export class Index extends React.Component<any, any> {
    
    @autobind
    private _render(id: number): JSX.Element {
        switch (id) {
            case 0:
                return this._renderFirstPage();
            case 1:
                return this._renderSecondPage();
            case 2:
                return this. _renderThirdPage();

            case 3:
                return this._renderFourthPage();
        }
    }

    @autobind 
    _renderPage(id: number): JSX.Element {
        return (
            <div>{id}</div>
        );
    }

    @autobind
    private _renderFirstPage(): JSX.Element {
        return (
            <div>FIRST PAGE</div>
        );
    }

    @autobind
    private _renderSecondPage(): JSX.Element {
        return (
            <div>SECOND PAGE</div>
        );
    }

    @autobind
    private _renderThirdPage() {
        return (
            <div>THIRD PAGE</div>
        );
    }
    

    @autobind
    private _renderFourthPage(): JSX.Element {
        return (
            <div>FOURTH PAGE</div>
        );
    }

    @autobind
    private _enterPage(currentIndex, nextIndex) {
    }

    @autobind
    private _leavePage(currentIndex, nextIndex) {
    }

    @autobind
    private _finishCreateScript() {
    }


    public render() {
        return (
            <Wizard 
            title={'Wizard'}
            onPageEnter={this._enterPage}
            onPageLeave={this._leavePage}
            steps={steps}
            onPageRender={this._render}
            onFinish={this._finishCreateScript}
            nextBtnState={true}>
            </Wizard>

        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
