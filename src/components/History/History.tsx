import * as React from 'react';
import * as classNames from 'classnames';
import {IHistoryProps} from './History.Props';
import {getNativeAttributes, buttonAttributes, anchorAttributes} from '../../utilities/attributes';
import {assign} from '../../utilities/object';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

import './History.scss';

export class History extends React.Component < IHistoryProps, any > {
    
    constructor(props) {
        super(props);
    }
    
    render () {
        return React.createElement(
            'div', 
            assign(''), 
            <div>
                <Button icon={'icon-arrowLeftSlim'} onClick={this.props.onBack}></Button>
                <Button icon={'icon-arrowRightSlim'} onClick={this.props.onForward}></Button>
            </div>
        );
    }
}
