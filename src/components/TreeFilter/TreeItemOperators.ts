import { ITreeFilterProps, ITreeFilterState, TreeItem } from './treeFilter.Props';
import * as _ from 'lodash';

export class ItemOperator {
    static getParentStructure = (items: Array<TreeItem>): { [id: string]: TreeItem } => {
        let parentItems: { [id: string]: TreeItem } = {};
        if (items === undefined || items.length === 0) { return parentItems; }

        const setParent = (parentStructure, parent, children: Array<TreeItem>) => {
            for (let item of children) {
                parentStructure[item.id] = parent;
                if (item.children !== undefined && item.children.length > 0) {
                    setParent(parentStructure, item, item.children);
                }
            }
        };
        setParent(parentItems, undefined, items);
        return Object.freeze(parentItems);
    }

    static getAllItemIds = (items: Array<TreeItem>) => {
        let itemIds = [];
        if (items === undefined || items.length === 0) { return itemIds; }
        for (let item of items) {
            itemIds.push(item.id);
            itemIds = itemIds.concat(ItemOperator.getAllItemIds(item.children));
        }
        return Object.freeze(itemIds);
    }

    static getAllChildrenIds = (currentItem: TreeItem): Array<string> => {
        let childrenIds = [];
        const children = currentItem.children;
        if (children !== undefined && children.length !== 0) {
            children.forEach(childElement => {
                childrenIds.push(childElement.id);
                childrenIds = childrenIds.concat(ItemOperator.getAllChildrenIds(childElement));
            });
        }
        return childrenIds;
    }

    static filterItems = (items: Array<TreeItem>, lowerCaseSearchText: string): Array<TreeItem> => {
        let filteredItems: Array<TreeItem> = [];
        if (items === undefined || items.length === 0) { return filteredItems; }
        for (let item of items) {
            if (lowerCaseSearchText === '' || item.value.toLowerCase().search(lowerCaseSearchText) !== -1) {
                filteredItems.push(item);
            } else if (item.children !== undefined && item.children.length > 0) { // item does not match search -> check children
                const filteredChildren = ItemOperator.filterItems(item.children, lowerCaseSearchText);
                if (filteredChildren.length > 0) {
                    let newItem: TreeItem = { ...item, children: filteredChildren };
                    filteredItems.push(newItem);
                }
            }
        }
        return filteredItems;
    }

     static findItemInTree = (items: Array<TreeItem>, currentItemId: string): TreeItem => {
        const currentItem = _.find(items, (item: TreeItem) => { return item.id === currentItemId; });
        if (currentItem !== undefined) {
            return currentItem;
        }
        for (let item of items) {
            if (item.children !== undefined && item.children.length > 0) {
                const childWithId = ItemOperator.findItemInTree(item.children, currentItemId);
                if (childWithId !== undefined) {
                    return childWithId;
                }
            }
        }
        return undefined;
    }
}
