import * as React from 'react';
import { IFarmProps } from './Farm.Props';
import * as classNames from 'classnames';
import './Farm.scss';


export class Farm extends React.Component<IFarmProps, any> {

    constructor(props?: IFarmProps) {
        super(props);
    }

    public render() { 
        let {name, id} = this.props;
        let classname = classNames('farm', [this.props.className]); 
        
        return(
            <div className={classname}>
                <span className="farm-name">{name}</span>
                {this.props.children}
            </div>
        );
    }
}
