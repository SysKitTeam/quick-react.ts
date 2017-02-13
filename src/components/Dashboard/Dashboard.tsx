import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import './Dashboard.scss';

export class Dashboard extends React.Component<IDashboardProps, any>{

    constructor(props?: IDashboardProps){
        super(props);
    }

    public render(){ 
        let {title} = this.props;

        return(
            <div className="dropdown-container">
                {title}
            </div> 
        );
    }
}