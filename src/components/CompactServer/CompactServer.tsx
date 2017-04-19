import * as React from 'react';
import { ICompactServerProps } from './CompactServer.Props';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import { ServerStatus } from '../../models';
import { filterServerByStatus } from '../../utilities/server';
import './CompactServer.scss';

function checkFilter(filter: string, serverName: string) {
    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
}

export class CompactServer extends React.PureComponent<ICompactServerProps, any> {
    constructor(props?: ICompactServerProps) {
        super(props);
    }
    
    render() {
        let isCritical = this.props.status === ServerStatus.Critical;
        let isWarning = this.props.status === ServerStatus.Warning;
        let isOK = this.props.status === ServerStatus.OK;

        let showItem = this.props.filter ? 
            checkFilter(this.props.filter, this.props.name) || filterServerByStatus(this.props.filter.replace('status:', '').trim(), this.props.status) : true;
        let className = classNames({ 'compact-server-container': showItem },
            { 'status-warning': isWarning },
            { 'status-ok': isOK },
            { 'status-critical': isCritical });

        return (
            <div
            className={className}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave} 
            onClick={this.onclick}
            >
                <span className={'server-title'}>
                    <span>{this.props.name}</span>                    
                </span>
                {
                    this.props.roles.length > 0 &&
                    <div>
                        <hr />
                        <TagContainer title={''} tags={this.props.roles}>
                        </TagContainer>
                    </div>
                }
            </div>
        );
    }

    @autobind
    private onclick() {
        const {serverOnClick, id} = this.props;
        if (serverOnClick) {
            serverOnClick(id);
        }
    }

    @autobind
    private editRoles(event) {
        const {onRoleEdit} = this.props;
        onRoleEdit(this.props.id);
    }

    @autobind
    private closeServer(event) {
        const {onClose} = this.props;
        onClose(this.props.id);
    }
}
