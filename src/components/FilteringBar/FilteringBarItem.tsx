import * as React from 'react';
import * as classnames from 'classnames';
import { IFilteringBarItemProps } from './FilteringBarItem.Props';
import { autobind } from '../../utilities/autobind';

import './FilteringBar.scss';

export class FilteringBarItem extends React.PureComponent<IFilteringBarItemProps> {

    public render(): JSX.Element {
        let itemClassNames = classnames(
            'filtering-bar-item',
            {
                'filtering-bar-item-selected': this.props.selected
            }
        );

        return (
            <div key={this.props.itemKey} onClick={this.onClick} className={itemClassNames}>
                {this.props.caption}
            </div>
        );
    }

    @autobind
    private onClick() {
        this.props.onClick(this.props.itemKey, !this.props.selected);
    }
}
