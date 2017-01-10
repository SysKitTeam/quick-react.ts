import * as React from 'react';
import * as classNames from 'classnames';
import {IHistoryProps} from './History.Props';
import {getNativeAttributes, buttonAttributes, anchorAttributes} from '../../utilities/attributes';
import {assign} from '../../utilities/object';
import {IconName} from '../Icon/IconName';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

//import './History.scss';

export class History extends React.Component < IHistoryProps, any > {
    
    constructor(props) {
        super(props);
    }
    
    render () {
        return React.createElement(
            'div', 
            assign(''), 
            <div>
                <Button icon={IconName.ArrowLeftSlim} onClick={this.props.onBack}></Button>
                <Button icon={IconName.ArrowRightSlim} onClick={this.props.onForward}></Button>
            </div>
        );
    }
}
