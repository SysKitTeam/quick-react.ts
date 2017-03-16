import * as React from 'react';
import { ICompactServerProps } from './CompactServer.Props';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import { ServerStatus } from '../../models';
import './CompactServer.scss';

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
        return !(this.props.name === nextProps.name
            && this.props.status === nextProps.status
            && this.props.roles === nextProps.roles);
    }

    render() {
        let isCritical = this.props.status === ServerStatus.Critical;
        let isWarning = this.props.status === ServerStatus.Warning;
        let isOK = this.props.status === ServerStatus.OK;


        let showItem = this.props.filter ? checkFilter(this.props.filter, this.props.name) : true;
        let className = classNames({ 'compact-server-container': showItem },
            { 'status-warning': isWarning },
            { 'status-ok': isOK },
            { 'status-critical': isCritical });


        return (

            <div className={className}>
                <span className={'server-title'}>
                    <span title={this.props.name} >{this.props.name}
                    </span>
                    <span className={'server-close'} onClick={this.closeServer}>&times;</span>
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
