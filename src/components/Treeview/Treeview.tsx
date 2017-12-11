import * as React from 'react';
import * as classNames from 'classnames';
import { ITreeviewProps } from './Treeview.Props';
import { TreeviewItem } from './TreeviewItem';
import { ITreeviewItem } from './TreeviewItem.Props';

import './Treeview.scss';

export class Treeview extends React.PureComponent<ITreeviewProps, {}> {
    public render(): JSX.Element {
        let { label, items, onSelect, showCheckbox, recursive, onExpand } = this.props;

        const className = classNames(
            'treeview',
            [this.props.className],
            {
                'treeview-with-checkbox': showCheckbox
            }
        );

        const parent = items.map((element) => {
            element.children = this._setElementChildren(element, items);
            return element;
        });

        return (
            <div className="treeview-container">
                {parent.map((item, index) => (!item.parentId &&
                    <div key={index} className={className}>
                        <TreeviewItem
                            item={item}
                            onChange={onSelect}
                            showCheckbox={showCheckbox}
                            children={item.children}
                            recursive={recursive}
                            className={item.className}
                            onExpand={onExpand}
                        />
                    </div>
                ))}
            </div>
        );
    }

    private _setElementChildren(currentItem: ITreeviewItem, allItems: ITreeviewItem[]): ITreeviewItem[] {
        const children = allItems.filter((element) => (element.parentId === currentItem.id));

        children.forEach((element) => {
            const grandChildren = this._setElementChildren(element, allItems);
            element.children = grandChildren;
        });

        return children;
    }
}
