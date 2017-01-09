import * as React from 'react';
import * as classNames from 'classnames';
import { IBreadcrumbsProps, IBreadcrumbItem } from './Breadcrumbs.Props';
import { Icon } from '../../components/Icon/Icon';
import { IconName } from '../../components/Icon/IconName';
import { Callout } from '../../components/Callout/Callout';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { ContextualMenu } from '../../components/ContextualMenu/ContextualMenu';
import {getId} from '../../utilities/getId';
import { autobind } from '../../utilities/autobind';
import { getRTL } from '../../utilities/rtl';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import './Breadcrumbs.scss';

export interface IBreadcrumbState {
    isOverflowOpen: boolean;
    overflowAnchor?: HTMLElement;
    renderedItems?: IBreadcrumbItem[];
    renderedOverflowItems?: IBreadcrumbItem[];
}

const OVERFLOW_KEY = 'overflow';
const OVERFLOW_WIDTH = 44;

export class Breadcrumbs extends React.Component<IBreadcrumbsProps, any> {
     public static defaultProps: IBreadcrumbsProps = {
        items: [],
        maxDisplayedItems: 999
    };

    public refs: {
        [key: string]: React.ReactInstance;
        renderingArea: HTMLElement;
    };

    private _breadcrumbItemWidths: { [key: string]: number };
    private _id: string;

    constructor (props) {
        super(props);

        this._id = getId('Breadcrumb');
        this.state = this._getStateFromProps(props);
    }

     public componentDidMount() {
        this._updateItemMeasurements();
        this._updateRenderedItems();
    }
    
    public renderedOverflowItems;
    public renderedItems;

    public componentWillReceiveProps(nextProps: IBreadcrumbsProps) {
        this.setState(this._getStateFromProps(nextProps));
        this._breadcrumbItemWidths = null;
    }

    public componentDidUpdate(prevProps: IBreadcrumbsProps, prevStates: IBreadcrumbState) {
        if (!this._breadcrumbItemWidths) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
    }

    public render(): JSX.Element {
        let { className } = this.props;
        let { isOverflowOpen, overflowAnchor, renderedItems, renderedOverflowItems } = this.state;
        let overflowMenuId = this._id + '-overflow';
        
        return (
            <div className={'breadcrumbs'} ref="renderingArea">
                <ul className={'breadcrumbs-list'}>
                    { renderedOverflowItems  && renderedOverflowItems .length ? (
                        <li className={'breadcrumbs-overflow'} key={ OVERFLOW_KEY } ref={ OVERFLOW_KEY }>
                            <div className={'breadcrumb-overflowButton'}
                                onClick={ this._onOverflowClicked }
                                data-is-focusable={ true }
                                role="button">
                                <Icon iconName={IconName.InProgress}></Icon>
                            </div>
                            <Icon iconName={ getRTL() ? IconName.ArrowDownRight : IconName.ArrowRight}></Icon>
                        </li>
                    ) : (null) }
                    { renderedItems.map((item, index) => (
                        <li className={'breadcrumbs-list-item'} key={ item.key || String(index) } ref={ item.key || String(index) }>
                            <a className={'breadcrumbs-item-link'}
                                onClick={ item.onClick ? this._onBreadcrumbClicked.bind(this, item) : null }
                                href={ item.href }
                                role={ item.onClick ? 'button' : 'link' }>
                            { item.text }
                            </a>
                            <Icon iconName={ getRTL() ? IconName.ArrowDownRight : IconName.ArrowRight}></Icon>
                        </li>
                    )) }
                    { isOverflowOpen ? (
                        <ContextualMenu
                            target={ overflowAnchor }
                            isBeakVisible={ true }
                            items={ renderedOverflowItems.map((item, index) => ({
                                name: item.text,
                                key: item.key,
                                onClick: this._onBreadcrumbClicked.bind(this, item),
                                href: item.href
                            })
                            ) }
                            id={ overflowMenuId }
                            directionalHint={ DirectionalHint.bottomLeftEdge }
                            onDismiss={ this._onOverflowDismissed } />
                    ) : (null) }
                </ul>
            </div>
        );
    };

    @autobind
    private _onOverflowClicked(ev: React.MouseEvent) {
        this.setState({
        'isOverflowOpen': !this.state.isOverflowOpen,
        'overflowAnchor': ev.currentTarget as HTMLElement
        });
    }

    @autobind
    private _onOverflowDismissed(ev: MouseEvent) {
        this.setState({
            'isOverflowOpen': false,
            'overflowAnchor': null
        });
    }

    @autobind
    private _onBreadcrumbClicked(item: IBreadcrumbItem, ev: React.MouseEvent) {
        if (item.onClick) {
            item.onClick(ev, item);
        }

        this.setState({
            'isOverflowOpen': false
        });
    }

    private _updateItemMeasurements() {
        let { items } = this.props;

        if (!this._breadcrumbItemWidths) {
            this._breadcrumbItemWidths = {};
        }

        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (!this._breadcrumbItemWidths[item.key]) {
                let el = this.refs[item.key] as HTMLElement;

                this._breadcrumbItemWidths[item.key] = el.getBoundingClientRect().width;
            }
        }
    }

    private _updateRenderedItems() {
        let { items, maxDisplayedItems } = this.props;
        let renderedItems = [];
        let renderedOverflowItems = [].concat(items);

        let minIndex = Math.max(0, renderedOverflowItems.length - maxDisplayedItems);

        renderedItems = renderedOverflowItems.splice(minIndex);

        this.setState({
            isOverflowOpen: this.state.isOverflowOpen,
            overflowAnchor: this.state.overflowAnchor,
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
        });
    }

    private _getStateFromProps(nextProps: IBreadcrumbsProps) {
        return {
            isOverflowOpen: false,
            overflowAnchor: null,
            renderedItems: nextProps.items || [],
            renderedOverflowItems: null
        };
    }
};
