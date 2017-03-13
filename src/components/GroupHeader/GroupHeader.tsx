import * as React from 'react';
import { IGroupHeaderProps } from './GroupHeader.Props';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import './GroupHeader.scss';


export class GroupHeader extends React.Component<IGroupHeaderProps, any> {

    constructor(props?: IGroupHeaderProps) {
        super(props);
    }

    public render() { 
        let {version, farmId, isCustomFarm} = this.props;
        let classname = classNames('farm-header', [this.props.className]); 
        
        return(
            <div className={classname} >
                <div><Icon iconName={version.icon}></Icon><i className="farm-header-info" title="SharePoint version">SharePoint {version.version}</i> </div>
                {
                    isCustomFarm &&
                    <div><Icon iconName={farmId.configDataBaseIcon}></Icon><i className="farm-header-info">{farmId.configDataBaseName}</i></div>
                }                            
            </div>
        );
    }
}
