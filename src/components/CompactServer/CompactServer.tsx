import * as React from 'react';
import { ICompactServerProps } from './CompactServer.Props';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import { ServerStatus } from '../../models';
import { GetClassForStatus } from '../../utilities/server';
import './CompactServer.scss';

export class CompactServer extends React.PureComponent<ICompactServerProps, any> {
    public static defaultProps = {
        editRoles: false
    };

    public ContainerElement: HTMLElement;

    constructor(props?: ICompactServerProps) {
        super(props);
        this.ContainerElement = null;
    }


    @autobind
    private refCallback(element) {
        this.ContainerElement = element;
    }
    render() {
        let { status, hoverMessageForCriticalOrWarningServer } = this.props;
        let className = GetClassForStatus('compact-server-container', status);

        let serverHoverMessage = hoverMessageForCriticalOrWarningServer && (status === ServerStatus.Critical || status === ServerStatus.Warning) ? hoverMessageForCriticalOrWarningServer : '';

        return (
            <div
                className={classNames(className, { 'is-clickable': this.props.serverOnClick !== undefined && this.props.serverOnClick !== null })}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onClick={this.onclick}
                ref={this.refCallback}
                title={serverHoverMessage}
            >
                <span className={'server-title'}>
                    <span>{this.props.name}</span>
                    {this.props.onClose &&
                        <Icon title={'Delete'} iconName={'icon-delete'} onClick={(event) => this.props.onClose(this.props.id, event)}></Icon>
                    }
                </span>
                {
                    this.props.roles.length > 0 &&
                    <div>
                        <TagContainer title={''} tags={this.props.roles}>
                            {this.props.onRoleEdit &&
                                <div className="edit-tags tag" title="Edit roles" onClick={(event => this.props.onRoleEdit(this.props.id, event))}>
                                    <Icon className="icon-edit"></Icon>
                                </div>
                            }
                        </TagContainer>
                    </div>
                }
            </div>
        );
    }

    @autobind
    private onclick(event) {
        const { serverOnClick, id } = this.props;
        if (serverOnClick) {
            serverOnClick(id);
        }
    }

    @autobind
    private closeServer(event) {
        const { onClose } = this.props;
        onClose(this.props.id);
    }
}
