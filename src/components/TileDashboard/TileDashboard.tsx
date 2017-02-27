import * as React from 'react';
import {ITileDashboardProps} from './TileDashboard.Props';
import {ServerTile} from '../ServerTile/ServerTile';
import * as classNames from 'classnames';

import './TileDashboard.scss';

export class TileDashboard extends React.Component<ITileDashboardProps, any> {
    
    constructor(props?: ITileDashboardProps) {
        super(props);
    }

    render() {  
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });
        return (
            <div className={classname}>
                <div className="tile-dashboard-container">

                </div>
            </div>
        );
    }
}
