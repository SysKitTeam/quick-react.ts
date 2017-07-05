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
        let { status } = this.props;
        let className = GetClassForStatus('compact-server-container', status);
        return (
            <div
                className={className}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onClick={this.onclick}
                ref={this.refCallback}
            >
                <span className={'server-title'}>
                    <span>{this.props.name}</span>
                </span>
                {
                    this.props.roles.length > 0 &&
                    <div>
                        <hr />
                        <TagContainer title={''} tags={this.props.roles}>
                            {this.props.editRoles &&
                                <div className="edit-tags tag" title="Edit roles" onClick={this.editRoles}>
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
    private editRoles(event) {
        const { roleEdit } = this.props;
        roleEdit(event, this.props.id);
    }

    @autobind
    private closeServer(event) {
        const { onClose } = this.props;
        onClose(this.props.id);
    }
}
