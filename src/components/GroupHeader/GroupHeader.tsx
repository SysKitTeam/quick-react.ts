import * as React from 'react';
import { IGroupHeaderProps } from './GroupHeader.Props';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import './GroupHeader.scss';


export class GroupHeader extends React.Component<IGroupHeaderProps, void> {

    constructor(props?: IGroupHeaderProps) {
        super(props);
    }

    public render() { 
        let classname = classNames('farm-header', [this.props.className]); 
        
        return(
            <div></div>
            // <div className={classname} >
            //     <div><Icon iconName={version.icon}></Icon><i className="farm-header-info" title="SharePoint version">SharePoint {version.version}</i> </div>                                        
            // </div>
        );
    }
}
