import * as React from 'react';
import { IFarmHeaderProps } from './FarmHeader.Props';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import './FarmHeader.scss';


export class FarmHeader extends React.Component<IFarmHeaderProps, any> {

    constructor(props?: IFarmHeaderProps) {
        super(props);
    }

    public render() { 
        let {sharepointVersion, sharepointIcon, configDB, configDBIcon, isCustomFarm} = this.props;
        let classname = classNames('farm-header', [this.props.className]); 
        
        return(
            <div className={classname} >
                <div><Icon iconName={sharepointIcon}></Icon><i className="farm-header-info" title="SharePoint version">SharePoint {sharepointVersion}</i> </div>
                {
                    isCustomFarm &&
                    <div><Icon iconName={configDBIcon}></Icon><i className="farm-header-info">{configDB}</i></div>
                }                           
            </div>
        );
    }
}
