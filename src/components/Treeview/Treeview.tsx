import * as React from 'react';
import * as classNames from 'classnames';
import { ITreeviewProps } from './Treeview.Props';
import { ITreeviewItem, MapChildren } from './TreeviewItem.Props';
import { TreeviewItem } from './TreeviewItem';
import { Icon } from '../../components/Icon/Icon';
import { CommonComponent } from '../Common/Common';
import './Treeview.scss';

export class Treeview extends CommonComponent<ITreeviewProps, {}> {
    public render(): JSX.Element {
        let { label, items, onSelect, showCheckbox, recursive } = this.props;
        const className = classNames(
            'treeview',
            [this.props.className]);

        let parent = items.map((element) => {
            element.children = MapChildren(element, items);
            return element;
        });
        return (
            <div >
                {parent.map((item, index) => ( !item.parentId &&
                    <div key={index} className={className}>
                    <TreeviewItem
                        item={item}
                        onChange={onSelect}
                        showCheckbox={showCheckbox}
                        children={item.children}
                        recursive={recursive} />
                    </div>
                ))}
            </div>
        );
    }
}
