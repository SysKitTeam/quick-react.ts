import * as React from 'react';
import {ICompactServerProps, ServerStatus} from './CompactServer.Props';
import {TagContainer} from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import  {autobind} from '../../utilities/autobind';
import'./CompactServer.scss';

export class CompactServer extends React.Component<ICompactServerProps, any> {

    constructor(props?: ICompactServerProps) {
        super(props);
    }

    getRoleDisplay(role) {
        return role.display;
    }
    
     public shouldComponentUpdate(nextProps: ICompactServerProps, nextState) {
        return !(this.props.serverName === nextProps.serverName
            && this.props.status === nextProps.status
            && this.props.roleList === nextProps.roleList);
    }

    render() {
         let isCritical = this.props.status === ServerStatus.Critical;
         let isWarning = this.props.status === ServerStatus.Warning;
         let isOK = this.props.status === ServerStatus.OK;
         let className = classNames('compact-server-container',
                        {[this.props.classNameList.warning]: isWarning}, 
                        {[this.props.classNameList.ok]: isOK}, 
                        {[this.props.classNameList.critical]: isCritical});

        let name = this.props.serverName;
        if (name.length > 15) {
            if (name.indexOf('.') !== -1 && name.indexOf('.') < 16) {
                name = name.substr(0, name.indexOf('.') + 1);
            } else {
                name = name.substr(0, 16) + '...';
            }                
        }

        return (
            <div className={ className }>
                <span className={'server-title'} title={this.props.serverName} >{name}
                    <span className={'server-close'} onClick={this.closeServer}>&times;</span>
                </span>
                {
                    this.props.roleList.length > 0 &&
                    <hr/>
                }
                {
                     this.props.roleList.length > 0 &&
                    <TagContainer  title={''} tags={this.props.roleList}>
                        <div className="edit-tags tag" title="Edit tags" onClick={this.editRoles}>
                            <Icon className="icon-Edit"></Icon>
                        </div>
                    </TagContainer>
                }
                
            </div>
        );
    }
    @autobind
    private editRoles(event) {
        const {onRoleEdit} = this.props;
        onRoleEdit(this.props.serverId);
        
    }

    @autobind
    private closeServer(event) {
        const {onServerClose} = this.props;
        onServerClose(this.props.serverId);
        
    }    
}
