import * as React from 'react';
import { INavigationGroupProps } from './navigationGroup.Props';
import { autobind } from '../../utilities/autobind';
import './NavigationGroup.scss';
import * as classNames from 'classnames';

export class NavigationGroup extends React.Component<INavigationGroupProps, void> {
    constructor(props) {
        super(props);
    }

    public render() {
        const category = this.props.Category;
        return (
            <div className="navigationGroupContainer">
                <div className="navigationGroupHeader">{category.text}</div>
                <ul className="navigationGroupList">
                    {category.items && category.items.map((item, itemIndex) => (
                        <li key={item.Key} disabled={item.disabled}
                            className={classNames({'navigationGroupItem':true, 'navigationGroupItemDisabled':item.disabled})}
                            onClick={() => this.navigationItemClicked(item.disabled, item.Key)}
                        >
                            <a title={item.text}>{item.text}</a>
                        </li>
                    ))}
                </ul>                                   
            </div>
        );
    }

    @autobind
    private navigationItemClicked(disabled: boolean, key) {
        const {onNavigationItemClicked} = this.props;
        if (!disabled) {
            onNavigationItemClicked(key);
        }
    }    
}