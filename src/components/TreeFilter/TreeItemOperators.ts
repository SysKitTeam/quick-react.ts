import { ITreeFilterProps, ITreeFilterState, TreeItem } from './treeFilter.Props';
import * as _ from 'lodash';


export interface TreeBranch {
    id: string;
    depth: number;
}
export interface LeafsAndBranches {
    Leafs: Array<string>;
    Branches: Array<TreeBranch>;
}

export interface CheckResult {
    checked: Array<string>;
    partially: Array<string>;
}

export const itemHasChildren = (item: TreeItem) => {
    return item.children != null && item.children.length !== 0;
};

export class ItemOperator {
    static getLookupTableAndParentLookup = (items: Array<TreeItem>) => {
        let parentItems: { [id: string]: TreeItem } = {};
        let lookup: { [id: string]: TreeItem } = {};
        if (items == null || items.length === 0) { return { parentLookup: parentItems, itemLookup: lookup }; }
        const setParentAndLookup = (parent, children: Array<TreeItem>) => {
            for (let item of children) {
                lookup[item.id] = item;
                parentItems[item.id] = parent;
                if (item.children != null && item.children.length > 0) {
                    setParentAndLookup(item, item.children);
                }
            }
        };
        setParentAndLookup(undefined, items);
        return { parentLookup: Object.freeze(parentItems), itemLookup: Object.freeze(lookup) };
    }

    static getAllItemIds = (entryItems: Array<TreeItem>) => {
        const getItemIdsRecursive = (items) => {
            let itemIds = [];
            if (items == null || items.length === 0) { return itemIds; }
            for (let item of items) {
                itemIds.push(item.id);
                itemIds = itemIds.concat(getItemIdsRecursive(item.children));
            }
            return itemIds;
        };
        let allItems = getItemIdsRecursive(entryItems);
        return Object.freeze(allItems);
    }

    static getAllChildrenIds = (currentItem: TreeItem): Array<string> => {
        let childrenIds = [];
        if (itemHasChildren(currentItem)) {
            currentItem.children.forEach(childElement => {
                childrenIds.push(childElement.id);
                childrenIds = childrenIds.concat(ItemOperator.getAllChildrenIds(childElement));
            });
        }
        return childrenIds;
    }

    static getAllLeafsAndBranches = (currentItem: TreeItem): LeafsAndBranches => {
        let leafs = [];
        let branches: Array<TreeBranch> = [];

        const checkItemRecursive = (item: TreeItem, depth) => {
            const children = item.children;
            if (itemHasChildren(item)) {
                branches.push({ id: item.id, depth: depth });
                children.forEach(childElement => {
                    checkItemRecursive(childElement, depth + 1);
                });
            } else {
                leafs.push(item.id);
            }
        };
        if (itemHasChildren(currentItem)) {
            branches.push({ id: currentItem.id, depth: 0 });
            currentItem.children.forEach(childElement => {
                checkItemRecursive(childElement, 1);
            });
        } else {
            leafs.push(currentItem.id);
        }

        return { Leafs: leafs, Branches: branches };
    }


    static filterItems = (items: Array<TreeItem>, lowerCaseSearchText: string): Array<TreeItem> => {
        let filteredItems: Array<TreeItem> = [];
        if (items == null || items.length === 0) { return filteredItems; }
        for (let item of items) {
            if (lowerCaseSearchText === '' || item.value.toLowerCase().search(lowerCaseSearchText) !== -1) {
                filteredItems.push(item);
            } else if (itemHasChildren(item)) { // item does not match search -> check children
                const filteredChildren = ItemOperator.filterItems(item.children, lowerCaseSearchText);
                if (filteredChildren.length > 0) {
                    let newItem: TreeItem = { ...item, children: filteredChildren };
                    filteredItems.push(newItem);
                }
            }
        }
        return filteredItems;
    }
}
