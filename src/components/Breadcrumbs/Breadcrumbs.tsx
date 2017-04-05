import * as React from 'react';
import * as classNames from 'classnames';
import { IBreadcrumbsProps, IBreadcrumbItem } from './Breadcrumbs.Props';
import { Icon } from '../../components/Icon/Icon';
import { Callout } from '../../components/Callout/Callout';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { ContextualMenu } from '../../components/ContextualMenu/ContextualMenu';
import { getId } from '../../utilities/getId';
import { autobind } from '../../utilities/autobind';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import './Breadcrumbs.scss';

const objectAssign = require('object-assign');

export interface ICurrentPathItem {
    name: string;
    key: string;
    index: number;
    selected: boolean;
}

export class Breadcrumbs extends React.Component<IBreadcrumbsProps, any> {
    constructor(props) {
        super(props);

        const currentPath = this.getDisplayItemsFromProps(props);

        this.state = {
            currentPath: currentPath,
            currentSelected: null
        };
    }

    public render(): JSX.Element {
        const paths = this.state.currentPath.map((item, index) => (
            <li className={'breadcrumbs-list-item'} key={index} onClick={this.handlePathClick.bind(this, item)}>
                <span>
                    { !item.selected ? <Icon iconName={'icon-arrow_right'} /> : <Icon iconName={'icon-arrow_down_right'} /> }
                </span>
                <a className={'breadcrumbs-item-link'}>{item.name}</a>
            </li>
        ));

        return (
            <div className={'breadcrumbs'}>
                <ul className={'breadcrumbs-list'}>{paths}</ul>
            </div>
        );
    };

    private getDisplayItemsFromProps(props: IBreadcrumbsProps): Array<ICurrentPathItem> {
        const paths = props.url.slice(1, props.url.length).split('/');
        let currentLevel = props.items,
            elements = Array<ICurrentPathItem>(0);
        for (let i = 0; i < paths.length; i++) {
            let key = paths[i];
            for (let j = 0; j < currentLevel.length; j++) {
                if (key === currentLevel[j].key) {
                    const item = currentLevel[j];
                    elements.push({ name: item.displayName, key: item.key, index: i, selected: false });
                    currentLevel = currentLevel[j].children;
                    break;
                }
            }
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
        this.setState({ currentPath: newPath, currentSelected: item.index });
    }

    // public componentDidMount() {
    //     // this._updateItemMeasurements();
    //     this._updateRenderedItems();
    // }

    // public renderedOverflowItems;
    // public renderedItems;

    // public componentWillReceiveProps(nextProps: IBreadcrumbsProps) {
    //     this.setState(this._getStateFromProps(nextProps));
    //     this._breadcrumbItemWidths = null;
    // }

    // public componentDidUpdate(prevProps: IBreadcrumbsProps, prevStates: IBreadcrumbState) {
    //     if (!this._breadcrumbItemWidths) {
    //         // this._updateItemMeasurements();
    //         this._updateRenderedItems();
    //     }
    // }

    // @autobind
    // private _onOverflowClicked(ev: React.MouseEvent<HTMLElement>) {
    //     this.setState({
    //     'isOverflowOpen': !this.state.isOverflowOpen,
    //     'overflowAnchor': ev.currentTarget as HTMLElement
    //     });
    // }

    // @autobind
    // private _onOverflowDismissed(ev: MouseEvent) {
    //     this.setState({
    //         'isOverflowOpen': false,
    //         'overflowAnchor': null
    //     });
    // }

    // @autobind
    // private _onBreadcrumbClicked(item: IBreadcrumbItem, ev: React.MouseEvent<HTMLElement>) {
    //     if (item.onClick) {
    //         item.onClick(ev, item);
    //     }

    //     this.setState({
    //         'isOverflowOpen': false
    //     });
    // }

    // private _updateItemMeasurements() {
    //     let { items } = this.props;

    //     if (!this._breadcrumbItemWidths) {
    //         this._breadcrumbItemWidths = {};
    //     }

    //     for (let i = 0; i < items.length; i++) {
    //         let item = items[i];

    //         if (!this._breadcrumbItemWidths[item.key]) {
    //             let el = this.refs[item.key] as HTMLElement;

    //             this._breadcrumbItemWidths[item.key] = el.getBoundingClientRect().width;
    //         }
    //     }
    // }

    // private _updateRenderedItems() {
    //     let { items, maxDisplayedItems } = this.props;
    //     let renderedItems = [];
    //     let renderedOverflowItems = [].concat(items);

    //     let minIndex = Math.max(0, renderedOverflowItems.length - maxDisplayedItems);

    //     renderedItems = renderedOverflowItems.splice(minIndex);

    //     this.setState({
    //         isOverflowOpen: this.state.isOverflowOpen,
    //         overflowAnchor: this.state.overflowAnchor,
    //         renderedItems: renderedItems,
    //         renderedOverflowItems: renderedOverflowItems,
    //     });
    // }

    // private _getStateFromProps(nextProps: IBreadcrumbsProps) {
    //     return {
    //         isOverflowOpen: false,
    //         overflowAnchor: null,
    //         renderedItems: nextProps.items || [],
    //         renderedOverflowItems: null
    //     };
    // }
};
