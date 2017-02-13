import * as React from 'react';
import {ICompactServerProps, ServerStatus} from './CompactServer.Props';
import {TagContainer} from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import'./CompactServer.scss';

export class CompactServer extends React.Component<ICompactServerProps, any> {

    constructor(props?: ICompactServerProps){
        super(props);
    }

      render(){
         let isCritical = this.props.status === ServerStatus.Critical;
         let isWarning = this.props.status === ServerStatus.Warning;
         let isOK = this.props.status === ServerStatus.OK;
         let className = "compact-server-container ";

         if(isWarning)
            className += this.props.classNameList['warning'];
        if(isOK)
            className += this.props.classNameList['ok'];
        if(isCritical)
            className += this.props.classNameList['critical'];

        let name = this.props.serverName;

        if(name.length > 15){
            if(name.indexOf('.') !== -1 && name.indexOf('.') < 16)
                name = name.substr(0, name.indexOf('.')+1);
            else
                name = name.substr(0,16) + "...";
        }

        return (
            <div className={ className }>
                <span className={"server-title"} title={this.props.serverName} >{name}
                    <span className={"server-close"}>&times;</span>
                </span>
                {
                    this.props.roleList.length > 0 &&
                    <hr/>
                }
                {
                     this.props.roleList.length > 0 &&
                    <TagContainer  title={""} tags={this.props.roleList}>
                        <div className="edit-tags tag" title="Edit tags" onClick={this.props.onClick()}>
                            <Icon className="icon-Edit"></Icon>
                        </div>
                    </TagContainer>
                }
                
            </div>
        );
    }
}