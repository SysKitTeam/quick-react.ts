import * as React from 'react';
import { IFilteringBarProps, IFilteringBarState, IFilteringOption } from './FilteringBar.Props';
import { FilteringBarItem } from './FilteringBarItem';
import { findIndex } from '../../utilities/array';

import { autobind } from '../../utilities/autobind';


export class FilteringBar extends React.PureComponent<IFilteringBarProps, IFilteringBarState> {

    constructor(props: IFilteringBarProps) {
        super(props);

        this.state = {
            filteringOptions: [
                {
                    key: 'Critical',
                    selected: false,
                    type: 'Status'
                },
                {
                    key: 'Warning',
                    selected: false,
                    type: 'Status'
                },
                {
                    key: 'Healthy',
                    selected: false,
                    type: 'Status'
                },
                {
                    key: 'Offline',
                    selected: false,
                    type: 'Status'
                }
            ]
        };
    }

    public render(): JSX.Element {

        return (
            <div className={this.props.className}>
                {this.state.filteringOptions && this.state.filteringOptions.map((option, index) => (
                    <FilteringBarItem
                        caption={option.key}
                        key={option.key}
                        itemKey={option.key}
                        selected={option.selected}
                        type={option.type}
                        onClick={this.onItemClick}
                    />
                ))
                }
            </div>
        );
    }

    @autobind
    private onItemClick(key: string, newState: boolean) {
        let items: Array<IFilteringOption> = [...this.state.filteringOptions];
        let changedIndex = findIndex(items, (item, index) => { return item.key === key; });
        if (changedIndex !== -1) {
            items[changedIndex] = { ...items[changedIndex], selected: newState };
        }
        this.setState({ filteringOptions: items });

        let selectedItems = items.filter(x => x.selected);
        this.props.onFilteringOptionsChanged(selectedItems);
    }
}
