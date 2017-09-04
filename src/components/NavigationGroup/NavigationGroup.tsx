import * as React from 'react';
import { INavigationGroupProps } from './navigationGroup.Props';
import './NavigationGroup.scss';
import * as classNames from 'classnames';

export class NavigationGroup extends React.PureComponent<INavigationGroupProps> {
    public render() {
        const category = this.props.Category;
        return (
            <div className="navigation-group-container">
                <div className="navigation-group-header">{category.text}</div>
                <ul className="navigation-group-list">
                    {category.items && category.items.map((item, itemIndex) => (
                        <li key={item.Key}
                            className={classNames({'navigation-group-item': true, 'navigation-group-item-disabled': item.disabled})}
                            onClick={() => this.navigationItemClicked(item.disabled, item.Key)}
                        >
                            <a title={item.tooltip}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    private navigationItemClicked = (disabled: boolean, key) => {
        const {onNavigationItemClicked} = this.props;
        if (!disabled) {
            onNavigationItemClicked(key);
        }
    }
}
