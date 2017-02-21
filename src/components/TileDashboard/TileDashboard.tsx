import * as React from 'react';
import {ITileDashboardProps} from './TileDashboard.Props';

import './TileDashboard.scss';

export class TileDashboard extends React.Component<ITileDashboardProps, any> {
    
    constructor(props?: ITileDashboardProps) {
        super(props);
    }

    render() {
        return(
            <div className="tile-dashboard-container">

            </div>
        );
    }
}
