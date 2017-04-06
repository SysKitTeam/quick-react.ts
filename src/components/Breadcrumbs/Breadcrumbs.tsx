import * as React from 'react';
import { autobind } from '../../utilities/autobind';
import { IBreadcrumbsProps, IBreadcrumbItem, ICurrentPathItem } from './Breadcrumbs.Props';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import './Breadcrumbs.scss';

const objectAssign = require('object-assign');

export class Breadcrumbs extends React.PureComponent<IBreadcrumbsProps, any> {
    private _dropdown: Dropdown[] = Array<Dropdown>(0);

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

    public render(): JSX.Element {
        const paths = this.state.currentPath.map((item, index) => {
                const iconName = item.selected ? this.props.iconNameExpanded : this.props.iconNameCollapsed;
                return (
                    <li className={'breadcrumbs-list-item'} key={index} >
                        <Dropdown
                            ref={this.setDropdownReference}
                            dropdownType={DropdownType.customDropdown} 
                            icon={iconName} 
                            onClosed={() => this.closeMenu(item)} 
                            onMenuToggle={(willOpen) => this.openMenu(item, willOpen)}
                        >
                            {this.mapSiblingsToMenu(item.siblings)}
                        </Dropdown>
                        <a 
                            className={'breadcrumbs-item-link'} 
                            onClick={() => this.props.onPathClick(item.url)}
                        >{item.name}</a>
                    </li>
                );
            }
        );

        return (
            <div className={'breadcrumbs'}>
                <ul className={'breadcrumbs-list'}>{paths}</ul>
            </div>
        );
    }

    @autobind
    private setDropdownReference(dropdown) {
        this._dropdown.push(dropdown);
    }

    private mapSiblingsToMenu(siblings: Array<ICurrentPathItem>) {
        return siblings.map((sibling, index) => {
            return <li key={index} onClick={() => this.handleMenuClick(sibling)}>{sibling.name}</li>;
        });
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

    private openMenu(item: ICurrentPathItem, willOpen: boolean) {
        const newPath = this.state.currentPath.map((path) => {
            if (item.index === path.index) {
                return objectAssign({}, path, { selected: willOpen });
            }
            return path;
        });
        this.setState({ currentPath: newPath });
    }

    private getDisplayItemsFromProps(props: IBreadcrumbsProps): Array<ICurrentPathItem> {
        const paths = props.url.slice(1, props.url.length).split('/');

        let currentLevel = props.items,
            elements = Array<ICurrentPathItem>(0),
            path = '';

        for (let i = 0; i < paths.length; i++) {
            let key = paths[i], 
                target, 
                targetPath, 
                targetIndex, 
                siblings = Array<ICurrentPathItem>(0);

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
                } else {
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
            }

            path += '/' + targetPath;
            elements.push(objectAssign({}, target, {siblings: siblings}));
            currentLevel = currentLevel[targetIndex].children;
        }
        return elements;
    }
}
