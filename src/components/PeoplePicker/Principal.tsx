import * as React from 'react';
import * as classNames from 'classnames';
import { IPrincipalProps, IPrincipal, PrincipalType } from './Principal.Props';
import { getId } from '../../utilities/getId';
import { autobind } from '../../utilities/autobind';
import './Principal.scss';
import { Icon } from './../../../src/components/Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';
import { DirectionalHint } from '../../utilities/DirectionalHint';

export interface IPrincipalState {
    showTooltip?: boolean;
}

export class Principal extends React.PureComponent<IPrincipalProps, IPrincipalState> {
    constructor(props) {
        super(props);

        this.state = {
            showTooltip: false
        };
    }

    @autobind
    private _onClickPrincipal(): void {
        this.props.onSelect(this.props.principal);
    }

    @autobind
    private _onClickDelete(): void {
        this.props.onDelete(this.props.principal);
    }

    @autobind
    private _onMouseOver(): void {
        this.setState({ showTooltip: true });
    }

    @autobind
    private _onMouseOut(): void {
        this.setState({ showTooltip: false });
    }

    @autobind
    private _getIconDetails() {
        if (this.props.principal.type === PrincipalType.user) {
            return (
                {
                    iconName: 'icon-user',
                    className: 'principal-user-icon'
                }
            );
        } else if (this.props.principal.type === PrincipalType.securityGroup) {
            return (
                {
                    iconName: 'icon-group',
                    className: 'principal-security-group-icon'
                }
            );
        } else if (this.props.principal.type === PrincipalType.sharePointGroup) {
            return (
                {
                    iconName: 'icon-group',
                    className: 'principal-share-point-group-icon'
                }
            );
        } else if (this.props.principal.type === PrincipalType.activeDirectoryGroup) {
            return (
                {
                    iconName: 'icon-group',
                    className: 'principal-active-directory-group-icon'
                }
            );
        }
    }

    public render() {
        let iconDetails: {
            iconName: string,
            className: string
        };

        iconDetails = this._getIconDetails();

        return (
            <span className="principal-container">
                <Icon iconName={iconDetails.iconName} className={iconDetails.className} ></Icon>
                <span
                    onClick={this._onClickPrincipal}
                    onMouseOver={this._onMouseOver}
                    onMouseOut={this._onMouseOut}
                >
                    {this.props.principal.displayName}
                </span>
                {this.props.isSelected &&
                    <Icon
                        iconName="icon-delete"
                        className="principal-delete-icon"
                        onClick={this._onClickDelete}
                    />
                }
                <Tooltip
                    className="tooltip-white"
                    content={this.props.principal.email}
                    directionalHint={DirectionalHint.rightCenter}
                    showTooltip={this.state.showTooltip}
                />
            </span>
        );
    }
}
