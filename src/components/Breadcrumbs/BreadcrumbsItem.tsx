import * as React from 'react';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import { Dropdown } from '../Dropdown/Dropdown';
import { autobind } from '../../utilities/autobind';
import { DropdownType } from '../Dropdown/Dropdown.Props';
import * as classNames from 'classnames';
import { IBreadcrumbsItemProps, IBreadcrumbsChild } from './BreadcrumbsItem.Props';
import './BreadcrumbsItem.scss';

export class BreadcrumbsItem extends React.Component<IBreadcrumbsItemProps, any> {
    private _dropdown;

     public static defaultProps = {
        iconCollapsed: 'icon-arrow_right',
        iconExpanded: 'icon-arrow_down_right'
    };

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };
    }

    public render() {
        let { className, iconName, text, children } = this.props;
        const icon = this.state.isMenuOpen ? this.props.iconExpanded : this.props.iconCollapsed;
        return (
            <div className={classNames('breadcrumbs-item', className)}>
                { 
                    iconName && 
                    <Icon 
                        className={classNames('breadcrumbs-item-icon', className)}
                        iconName={iconName} 
                        onClick={() => this.props.onClick(this.props.url)} 
                    /> 
                }
                { 
                    text &&
                    <Label 
                        className={classNames('breadcrumbs-item-label', className)}
                        onClick={() => this.props.onClick(this.props.url)}
                    >{text}</Label> 
                }
                {
                    children &&
                    <Dropdown
                        className={'breadcrumbs-dropdown'}
                        ref={this.setDropdownReference}
                        dropdownType={DropdownType.customDropdown}
                        icon={icon}
                        onClosed={this.onClosed}
                        onMenuToggle={(opened) => this.setState({ isMenuOpen: opened })}
                    >
                        {this.mapChildrenToMenu(children)}
                    </Dropdown>
                }
            </div>
        );
    }

    @autobind
    private setDropdownReference(dropdown) {
        this._dropdown = dropdown;
    }

    private mapChildrenToMenu(children: Array<IBreadcrumbsChild>) {
        return children.map((child, index) => {
            return <li key={index} onClick={() => this.handleChildClick(child)}>{child.displayName}</li>;
        });
    }

    private handleChildClick(child: IBreadcrumbsChild) {
        this.props.onClick(child.url);
        this.closeDropdown();
        this.setState({ isMenuOpen: false });
    }

    @autobind
    private onClosed() {
        this.setState({ isMenuOpen: false });
    }

    private closeDropdown() {
        this._dropdown.closeDropdown();
    }
}
