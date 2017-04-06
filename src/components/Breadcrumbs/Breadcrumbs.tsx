import * as React from 'react';
import * as classNames from 'classnames';
import { IBreadcrumbsProps, IBreadcrumbItem } from './Breadcrumbs.Props';
import { Icon } from '../../components/Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { ContextualMenu } from '../ContextualMenu/ContextualMenu';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownType, IDropdownOption } from '../Dropdown/Dropdown.Props';
import { ICurrentPathItem } from './Breadcrumbs.props';
import './Breadcrumbs.scss';

const objectAssign = require('object-assign');

export class Breadcrumbs extends React.PureComponent<IBreadcrumbsProps, any> {
    constructor(props) {
        super(props);

        const currentPath = this.getDisplayItemsFromProps(props);

        this.state = {
            currentPath: currentPath,
            currentSelected: null,
            overflowAnchor: null
        };
    }

    public componentWillReceiveProps(nextProps: IBreadcrumbsProps, nextState: any) {
        const newState = this.getDisplayItemsFromProps(nextProps);
        this.setState({ currentPath: newState });
    }

    public render(): JSX.Element {
        const paths = this.state.currentPath.map((item, index) => {
                const iconName = item.selected ? 'icon-arrow_down_right' : 'icon-arrow_right';
                return (
                    <li className={'breadcrumbs-list-item'} key={index} >
                        <Dropdown dropdownType={DropdownType.customDropdown} icon={iconName}>
                            {this.mapSiblingsToMenu(item.siblings)}
                        </Dropdown>
                        <a className={'breadcrumbs-item-link'} onClick={() => this.props.onPathClick(item.url)}>{item.name}</a>
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

    private mapSiblingsToMenu(siblings: Array<ICurrentPathItem>) {
        return siblings.map((sibling, index) => {
            return <li key={index} onClick={() => this.props.onPathClick(sibling.url)}>{sibling.name}</li>;
        });
    }

    private handlePathClick(item, ev: React.MouseEvent<HTMLElement>) {
        let currentSelected;
        const newPath = this.state.currentPath.map((path) => {
            if (path.index === this.state.currentSelected) {
                currentSelected = null;
                return objectAssign({}, path, { selected: false });
            } else if (path.index === item.index) {
                currentSelected = item.index;
                return objectAssign({}, path, { selected: !path.selected });
            }
            return path;
        });
        this.setState({ currentPath: newPath, currentSelected: currentSelected, overflowAnchor: ev.currentTarget });
    }

    private getDisplayItemsFromProps(props: IBreadcrumbsProps): Array<ICurrentPathItem> {
        const paths = props.url.slice(1, props.url.length).split('/');
        let currentLevel = props.items,
            elements = Array<ICurrentPathItem>(0),
            siblings = Array<ICurrentPathItem>(0),
            target,
            targetIndex,
            path = '';
        for (let i = 0; i < paths.length; i++) {
            let key = paths[i];
            let targetPath;
            for (let j = 0; j < currentLevel.length; j++) {
                const item = currentLevel[j];
                if (key === item.key) {
                    target = { name: item.displayName, key: item.key, index: i, selected: false, siblings: null, url: path + '/' + item.key };
                    targetIndex = j;
                    targetPath = item.key;
                } else {
                    siblings.push({ name: item.displayName, key: item.key, index: i, selected: false, url: path + '/' + item.key });
                }
            }
            path += '/' + targetPath;
            elements.push(objectAssign({}, target, {siblings: siblings}));
            currentLevel = currentLevel[targetIndex].children;
            siblings = Array(0);
        }
        return elements;
    }
}
