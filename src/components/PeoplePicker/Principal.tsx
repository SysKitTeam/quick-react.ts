import * as React from 'react';
import * as classNames from 'classnames';
import { IPrincipalProps, IPrincipal } from './Principal.Props';
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

    private _onClickPrincipal(): void {
        this.props.onSelect(this.props.principal);
    }

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

    public render() {
        return (
            <span className="principal-container">
                <Icon iconName={this.props.iconName}></Icon>
                <span 
                    onClick={() => this._onClickPrincipal()} 
                    onMouseOver={() => this._onMouseOver()}
                    onMouseOut={() => this._onMouseOut()}
                >
                {this.props.principal.displayName}
                </span>
                {this.props.isSelected && 
                    <Icon iconName={'icon-delete'} className="principal-delete-icon" onClick={() => this._onClickDelete()}></Icon>
                }
                <Tooltip
                    className={'tooltip-white'}                                         
                    content={this.props.principal.email}
                    directionalHint={DirectionalHint.rightCenter}
                    showTooltip={this.state.showTooltip} 
               />
            </span>
        );
    }
}
