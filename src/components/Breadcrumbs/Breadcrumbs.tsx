import * as React from 'react';
import { autobind } from '../../utilities/autobind';
import { IBreadcrumbsProps, IBreadcrumbItem, ICurrentPathItem } from './Breadcrumbs.Props';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import './Breadcrumbs.scss';
import { Icon } from '../Icon/Icon';

const objectAssign = require('object-assign');

export class Breadcrumbs extends React.PureComponent<IBreadcrumbsProps, any> {
    private _dropdown: Dropdown[] = Array<Dropdown>(0);
    private _lastPicked: boolean = false;

    public static defaultProps = {
        iconNameCollapsed: 'icon-arrow_right',
        iconNameExpanded: 'icon-arrow_down_right'
    };

    constructor(props) {
        super(props);

        const currentPath = this.getDisplayItemsFromProps(props);
        this.state = { currentPath: currentPath };
    }

    public componentWillReceiveProps(nextProps: IBreadcrumbsProps, nextState: any) {
        const currentPath = this.getDisplayItemsFromProps(nextProps);
        this.setState({ currentPath: currentPath });
    }

    public componentWillUnmount() {
        this._dropdown = Array(0);
    }

    public render(): JSX.Element {
        const paths = this.state.currentPath.map((item, index) => {
            const iconName = item.selected ? this.props.iconNameExpanded : this.props.iconNameCollapsed;
            const last = index === this.state.currentPath.length - 1;
            return (
                <li className={'breadcrumbs-list-item'} key={index} >
                    <Dropdown
                        className={'breadcrumbs-dropdown'}
                        ref={this.setDropdownReference}
                        dropdownType={DropdownType.customDropdown}
                        icon={iconName}
                        onClosed={() => this.closeMenu(item)}
                        onMenuToggle={(willOpen) => this.menuToggle(item, willOpen)}
                        >
                        {this.mapSiblingsToMenu(item.siblings)}
                    </Dropdown>
                    <a
                        className={'breadcrumbs-item-link'}
                        onClick={() => this.props.onPathClick(item.url)}
                        >{item.name}</a>
                    {
                        item.children && last &&
                        <Dropdown
                            className={'breadcrumbs-dropdown'}
                            ref={this.setDropdownReference}
                            dropdownType={DropdownType.customDropdown}
                            icon={this._lastPicked ? this.props.iconNameExpanded : this.props.iconNameCollapsed}
                            onClosed={() => this.closeLast()}
                            onMenuToggle={(willOpen) => this.lastMenuToggle(willOpen)}
                            >
                            {this.mapChildrenToMenu(item.children)}
                        </Dropdown>
                    }
                </li>
            );
        }
        );

        return (
            <div className={'breadcrumbs'}>
                <Icon iconName={'icon-home'} />
                <ul className={'breadcrumbs-list'}>{paths}</ul>
            </div>
        );
    }

    private closeLast() {
        this._lastPicked = false;
        this.forceUpdate();
    }

    @autobind
    private setDropdownReference(dropdown) {
        if (dropdown === null) { return; }
        this._dropdown.push(dropdown);
    }

    private mapSiblingsToMenu(siblings: Array<ICurrentPathItem>) {
        return siblings.map((sibling, index) => {
            return <li key={index} onClick={() => this.handleMenuClick(sibling)}>{sibling.name}</li>;
        });
    }

    private mapChildrenToMenu(children: Array<ICurrentPathItem>) {
        return children.map((child, index) => {
            return <li key={index} onClick={() => this.handleLastDropdownClick(child)}>{child.name}</li>;
        });
    }

    private handleLastDropdownClick(child: ICurrentPathItem) {
        this.props.onPathClick(child.url);
        this._dropdown[this._dropdown.length - 1].closeDropdown();
    }

    private handleMenuClick(item: ICurrentPathItem) {
        this.props.onPathClick(item.url);
        this.closeMenu(item);
        this._dropdown[item.index].closeDropdown();
    }

    private closeMenu(item: ICurrentPathItem) {
        const newPath = this.state.currentPath.map((path) => {
            if (path.index === item.index) {
                return objectAssign({}, path, { selected: false });
            }
            return path;
        });
        this.setState({ currentPath: newPath });
    }

    private menuToggle(item: ICurrentPathItem, willOpen: boolean) {
        this._dropdown = Array(0);
        const newPath = this.state.currentPath.map((path) => {
            if (item.index === path.index) {
                return objectAssign({}, path, { selected: willOpen });
            }
            return path;
        });
        this.setState({ currentPath: newPath });
    }

    private lastMenuToggle(willOpen: boolean) {
        this._dropdown = Array(0);
        this._lastPicked = willOpen;
        this.forceUpdate();
    }

    private getDisplayItemsFromProps(props: IBreadcrumbsProps): Array<ICurrentPathItem> {
        const url = props.url.slice(0, 1) === '/' ? props.url.slice(1, props.url.length) : props.url;

        const paths = url.split('/');

        let currentLevel = props.items,
            elements = Array<ICurrentPathItem>(0),
            path = '';

        for (let i = 0; i < paths.length; i++) {
            let key = paths[i],
                target,
                targetPath,
                targetIndex,
                siblings = Array<ICurrentPathItem>(0),
                children;

            for (let j = 0; j < currentLevel.length; j++) {
                const item = currentLevel[j];
                if (key === item.key) {
                    target = {
                        name: item.displayName,
                        key: item.key,
                        index: i,
                        selected: false,
                        siblings: null,
                        url: path + '/' + item.key
                    };
                    targetIndex = j;
                    targetPath = item.key;

                    if (item.children) {
                        const currentUrl = path + '/' + item.key + '/';
                        children = item.children.map((item, index) => {
                            const currentItem: ICurrentPathItem = {
                                name: item.displayName,
                                key: item.key,
                                index: index,
                                url: currentUrl + item.key,
                                selected: false,
                            };
                            return currentItem;
                        });
                    }

                }
                siblings.push(
                    {
                        name: item.displayName,
                        key: item.key,
                        index: i,
                        selected: false,
                        url: path + '/' + item.key
                    }
                );
            }

            if (!target) { break; }

            path += '/' + targetPath;
            elements.push(objectAssign({}, target, { siblings: siblings, children: children }));
            currentLevel = currentLevel[targetIndex].children;
        }
        return elements;
    }
}
