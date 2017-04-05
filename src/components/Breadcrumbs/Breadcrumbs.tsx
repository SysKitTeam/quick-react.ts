import * as React from 'react';
import * as classNames from 'classnames';
import { IBreadcrumbsProps, IBreadcrumbItem } from './Breadcrumbs.Props';
import { Icon } from '../../components/Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { ContextualMenu } from '../ContextualMenu/ContextualMenu';
import { DirectionalHint } from '../../utilities/DirectionalHint';
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

    public render(): JSX.Element {
        const paths = this.state.currentPath.map((item, index) => {
                const iconName = item.selected ? 'icon-arrow_down_right' : 'icon-arrow_right';
                return (
                    <li className={'breadcrumbs-list-item'} key={index} >
                        <Icon iconName={iconName} onClick={this.handlePathClick.bind(this, item)}/>
                        <a className={'breadcrumbs-item-link'} onClick={() => this.props.onPathClick(this.constructPath(item.index))}>{item.name}</a>
                        {item.selected &&  
                            <ContextualMenu
                                    target={ this.state.overflowAnchor }
                                    isBeakVisible={ true }
                                    items={item.siblings}
                                    id={ null }
                                    directionalHint={ DirectionalHint.bottomLeftEdge }
                                    onDismiss={this.handleContextDismiss.bind(this, item)} /> 
                        }
                    </li>
                );
            }
        );

        return (
            <div className={'breadcrumbs'}>
                <ul className={'breadcrumbs-list'}>{paths}</ul>
            </div>
        );
    };

    @autobind
    private handleContextDismiss(item, ev: React.MouseEvent<HTMLElement>) {
        const newPath = this.state.currentPath.map((path) => {
            if (path.index === this.state.currentSelected) {
                return objectAssign({}, path, { selected: false });
            }
            return path;
        });
        this.setState({ currentPath: newPath, currentSelected: null, overflowAnchor: null });
    }

    private getDisplayItemsFromProps(props: IBreadcrumbsProps): Array<ICurrentPathItem> {
        const paths = props.url.slice(1, props.url.length).split('/');
        let currentLevel = props.items,
            elements = Array<ICurrentPathItem>(0),
            siblings = Array<ICurrentPathItem>(0),
            target,
            targetIndex;
        for (let i = 0; i < paths.length; i++) {
            let key = paths[i];
            for (let j = 0; j < currentLevel.length; j++) {
                const item = currentLevel[j];
                if (key === currentLevel[j].key) {
                    target = { name: item.displayName, key: item.key, index: i, selected: false, siblings: null };
                    targetIndex = j;
                } else {
                    siblings.push({ name: item.displayName, key: item.key, index: i, selected: false, onClick: () => this.props.onPathClick(this.constructPath(j)) });
                }
            }
            elements.push(objectAssign({}, target, {siblings: siblings}));
            currentLevel = currentLevel[targetIndex].children;
            siblings = Array(0);
        }
        return elements;
    }

    @autobind
    private handlePathClick(item, ev: React.MouseEvent<HTMLElement>) {
        const newPath = this.state.currentPath.map((path) => {
            if (path.index === item.index) {
                return objectAssign({}, path, { selected: !item.selected });
            }
            if (path.index === this.state.currentSelected) {
                return objectAssign({}, path, { selected: false });
            }
            return path;
        });
        this.setState({ currentPath: newPath, currentSelected: item.index, overflowAnchor: ev.currentTarget });
    }

    private constructPath(clickedIndex: number) {
        let path = '/';
        let i;
        for (i = 0; i < clickedIndex; i++) { path += this.state.currentPath[i].key + '/'; }
        return path + this.state.currentPath[i].key;
    }
};
