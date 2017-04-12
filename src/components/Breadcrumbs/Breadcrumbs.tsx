import * as React from 'react';
import { autobind } from '../../utilities/autobind';
import { IBreadcrumbsProps, IBreadcrumbItem, ICurrentPathItem } from './Breadcrumbs.Props';
import './Breadcrumbs.scss';
import { IBreadcrumbsChild } from './BreadcrumbsItem.Props';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import { Icon } from '../Icon/Icon';

const objectAssign = require('object-assign');

export class Breadcrumbs extends React.PureComponent<IBreadcrumbsProps, any> {
    public static defaultProps = {
        iconNameCollapsed: 'icon-arrow_right',
        iconNameExpanded: 'icon-arrow_down_right'
    };

    public render() {
        const items = this.getDisplayItemsFromProps(this.props);
        const rootItem = this.getFirstLevelFromProps(this.props);
        return (
            <div className={'breadcrumbs'}>
                <ul className={'breadcrumbs-list'}>
                    {
                        items.map((item, index) => {
                            return (
                                <li className={'breadcrumbs-list-item'} key={index}>
                                    <BreadcrumbsItem
                                        displayName={item.name} 
                                        text={item.text} 
                                        url={item.url}
                                        iconName={item.iconName}
                                        children={item.children} 
                                        onClick={(url) => this.props.onPathClick(url)}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    private getDisplayItemsFromProps(props: IBreadcrumbsProps): Array<ICurrentPathItem> {
        const url = props.url.slice(0, 1) === '/' ? props.url.slice(1, props.url.length) : props.url;
        const paths = url.split('/');

        let currentLevel = props.items,
            elements = Array<ICurrentPathItem>(0),
            path = '';

        const rootItem = this.getFirstLevelFromProps(props);
        elements.push(rootItem);

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
                        url: path + '/' + item.key,
                        text: item.displayName
                    };
                    targetIndex = j;
                    targetPath = item.key;

                    if (item.children) {
                        const currentUrl = path + '/' + item.key + '/';
                        children = item.children.map((item, index) => {
                            const currentItem: IBreadcrumbsChild = {
                                displayName: item.displayName,
                                url: currentUrl + item.key,
                            };
                            return currentItem;
                        });
                    }
                    break;
                }
            }

            if (!target) { break; }

            path += '/' + targetPath;
            elements.push(objectAssign({}, target, { children: children }));
            currentLevel = currentLevel[targetIndex].children;
        }

        return elements;
    }

    private getFirstLevelFromProps(props: IBreadcrumbsProps) : ICurrentPathItem {
        let children = Array<IBreadcrumbsChild>(0);
        for (let i = 0; i < props.items.length; i++) {
            const item = props.items[i];
            children.push(
                {
                    displayName: item.displayName,
                    url: '/' + item.key,
                }
            );
        }
        let item : ICurrentPathItem = {
            name: 'Home',
            iconName: 'icon-home',
            children: children,
            url: '/'
        };

        return item;
    }
}
