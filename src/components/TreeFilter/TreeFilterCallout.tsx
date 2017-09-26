import * as React from 'react';
import Resizable from 'react-resizable-box';
import * as classNames from 'classnames';
import * as _ from 'lodash';

import { Callout } from '../Callout';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { Icon } from '../Icon';
import { ITreeFilterProps, ITreeFilterState, TreeItem, CheckStatus, FilterSelectionEnum, IFilterSelection, defaultTreeFilterProps } from './TreeFilter.Props';
import { ItemOperator } from './TreeItemOperators';
import { TreeFilterNew } from './TreeFilterNew';

import { autobind } from '../../utilities/autobind';

import './TreeFilterCallout.scss';

export interface ITreeFilterCalloutState {
    isOpen: boolean;
    filterSelection: IFilterSelection;
    isDefaultSelected: boolean;
    selectionText: string;
    query: string;
}

export class TreeFilterCallout extends React.PureComponent<ITreeFilterProps, ITreeFilterCalloutState> {
    private _anchor: any;
    private _callout: any;
    private allItemIds: ReadonlyArray<string>;

    static defaultProps = defaultTreeFilterProps;

    constructor(props: ITreeFilterProps) {
        super(props);
        this.state = {
            isOpen: false,
            filterSelection: props.filterSelection,
            isDefaultSelected: false,
            selectionText: 'Please select...',
            query: ''
        };
        this.allItemIds = ItemOperator.getAllItemIds(props.items);
    }

    public componentWillReceiveProps(nextProps: ITreeFilterProps) {
        if (nextProps.items === this.props.items) {
            return;
        }

        const filteredItems = ItemOperator.filterItems(nextProps.items, '');
        this.setState(prevState => ({ ...prevState, filteredItems: filteredItems }));
    }

    private setAnchorRef = (ref) => {
        this._anchor = ref;
    }

    private setCalloutRef = (ref) => {
        this._callout = ref;
    }

    private toggleOpenState = () => {
        this.setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
    }

    private onDismiss = () => {
        this.setState(prevState => ({ ...prevState, isOpen: false }));
    }

    private getBoxSupportElementsHeight = () => {
        let heightDiff = 5; // 5px: paddings
        if (!this.props.isSingleSelect) { heightDiff += 44; } // 25px: SelectAll +  19px: Footer
        if (this.props.hasSearch) { heightDiff += 30; }
        return heightDiff;
    }

    private getBoxHeight = (availableHeight) => {
        const supportElementsHeight = this.getBoxSupportElementsHeight();
        const maxListHeight = availableHeight - supportElementsHeight;
        const numberOfItems = this.allItemIds.length;
        const itemsListHeight = numberOfItems * this.props.rowHeight;
        if (itemsListHeight < maxListHeight) {
            return itemsListHeight + supportElementsHeight;
        } else {
            return availableHeight;
        }
    }

    private onCalloutResize = () => {
        this._callout.UpdatePosition();
    }

    @autobind
    private onValuesSelected(filterId: string, filterSelection) {
        this.setState({ ...this.state, filterSelection });
        this.props.onValuesSelected(filterId, filterSelection);
    }

    @autobind
    private onCustomSelection(isDefaultSelected: boolean) {
        this.setState({ isDefaultSelected });
    }

    @autobind
    private onFilterReset() {
        this.setState({
            ...this.state,
            filterSelection: {
                type: FilterSelectionEnum.All,
                selectedIDs: this.allItemIds as Array<string>
            },
            isDefaultSelected: true,
            selectionText: '[All]'
        });
    }

    @autobind
    private onTextSelectionChange(selectionText: string) {
        this.setState({ selectionText: selectionText });
    }

    @autobind
    private onItemsSearch(query: string) {
        if (this.props.clearSearchOnClose) {
            return;
        }
        this.setState({ ...this.state, query });
    }

    public render() {
        const { isOpen, isDefaultSelected } = this.state;

        const treeFilterProps = {
            ...this.props,
            title: undefined,
            onCustomSelection: this.onCustomSelection,
            onValuesSelected: this.onValuesSelected,
            filterSelection: this.state.filterSelection,
            selectionText: this.onTextSelectionChange,
            onItemsSearch: this.onItemsSearch,
            searchQuery: this.state.query
        };

        return (
            <div>
                <div className="tree-filter-container" ref={this.setAnchorRef}>
                    <span className={classNames({ 'item-selected': !isDefaultSelected })} >{this.props.title}: </span>
                    {
                        !isDefaultSelected &&
                        <Icon iconName="icon-delete" title="Reset selection" className="reset-filter-icon" onClick={this.onFilterReset} />
                    }
                    <div className="tree-filter-title" onClick={this.toggleOpenState}>
                        <span>{this.state.selectionText}</span>
                        {
                            isOpen &&
                            <Icon className="dropdown-icon" iconName={'icon-Arrow_up'} />
                        }
                        {
                            !isOpen &&
                            <Icon className="dropdown-icon" iconName={'icon-arrow_down'} />
                        }
                    </div>
                </div>
                {
                    this.state.isOpen &&
                    <Callout
                        ref={this.setCalloutRef}
                        isBeakVisible={false}
                        className="tree-filter-callout"
                        gapSpace={0}
                        doNotLayer={false}
                        directionalHint={this.props.directionalHint}
                        targetElement={this._anchor}
                        onDismiss={this.onDismiss}
                    >
                        <Resizable
                            width={this.props.width}
                            height={this.getBoxHeight(this.props.height)}
                            style={{ overflow: 'hidden' }}
                            minWidth={this.props.minWidth}
                            minHeight={this.props.minHeight}
                            maxWidth={this.props.maxWidth}
                            maxHeight={this.props.maxHeight}
                            onResize={this.onCalloutResize}
                            enable={this.props.enabledResizeHandles}
                        >
                            <div style={{ height: '100%', width: '100%' }}>
                                <TreeFilterNew
                                    {...treeFilterProps}
                                />
                            </div>
                        </Resizable>
                    </Callout>
                }
            </div>
        );
    }
}
