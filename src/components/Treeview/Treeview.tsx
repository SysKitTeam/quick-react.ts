import * as React from 'react';
import * as classNames from 'classnames';
import { ITreeviewProps, defaultTreeviewProps } from './Treeview.Props';
import { MapChildren } from './TreeviewItem.Props';
import { TreeviewItem } from './TreeviewItem';

import './Treeview.scss';

export class Treeview extends React.PureComponent<ITreeviewProps, {}> {
    public static defaultProps = defaultTreeviewProps;

    public render(): JSX.Element {
        let { label, items, onSelect, showCheckbox, recursive, expandParentOnClick, onExpand } = this.props;

        const className = classNames(
            'treeview',
            [this.props.className]
        );

        const parent = items.map((element) => {
            element.children = MapChildren(element, items);
            return element;
        });

        return (
            <div >
                {parent.map((item, index) => (!item.parentId &&
                    <div key={index} className={className}>
                        <TreeviewItem
                            item={item}
                            onChange={onSelect}
                            showCheckbox={showCheckbox}
                            children={item.children}
                            recursive={recursive}
                            className={item.className}
                            expandParentOnClick={expandParentOnClick}
                            onExpand={onExpand}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
