import * as React from 'react';
import { Label } from '../Label/Label';
import { Icon } from '../Icon/Icon';
import { Dropdown } from '../Dropdown/Dropdown';
import { autobind } from '../../utilities/autobind';
import { DropdownType } from '../Dropdown/Dropdown.Props';
import * as classNames from 'classnames';
import { IBreadcrumbItemProps, IBreadcrumbChild } from './BreadcrumbItem.Props';
import './BreadcrumbItem.scss';

export class BreadcrumbItem extends React.Component<IBreadcrumbItemProps, any> {
    private _dropdown;

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
                <div className={'breadcrumbs-item-title'}>
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
                </div>
                {
                    (children.length !== 0) &&
                    <Dropdown
                        className={'breadcrumbs-dropdown'}
                        ref={this.setDropdownReference}
                        calloutClassName={'breadcrumbs-dropdown-callout'}
                        dropdownType={DropdownType.customDropdown}
                        displaySelection={false}
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

    private mapChildrenToMenu(children: Array<IBreadcrumbChild>) {
        return children.map((child, index) => {
            return <li key={index} className={classNames('dropdown-item')} onClick={() => this.handleChildClick(child)}>{child.displayName}</li>;
        });
    }

    private handleChildClick(child: IBreadcrumbChild) {
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
