import * as React from 'react';
import {ICompactServerProps, ServerStatus} from './CompactServer.Props';
import {TagContainer} from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import  {autobind} from '../../utilities/autobind';
import'./CompactServer.scss';

function checkFilter(filter: string, serverName: string) {
    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
}

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
         

        let name = this.props.serverName;
        let showItem = this.props.filter ? checkFilter(this.props.filter,  this.props.serverName) : true;
        let className = classNames({'compact-server-container': showItem},
                        {[this.props.classNameList.warning]: isWarning}, 
                        {[this.props.classNameList.ok]: isOK}, 
                        {[this.props.classNameList.critical]: isCritical});
                        
        if (!showItem) {
            return null;
        }
        return (
            
            <div className={ className }>
                    <span className={'server-title'}>
                        <span title={name} >{name}                        
                        </span>
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
