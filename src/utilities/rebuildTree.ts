import { TreeItem } from '../components/TreeFilter/TreeFilter.Props';
import { ILookupTable } from '../components/TreeFilter/TreeItemOperators';

export function rebuildTree(newTreeItem: TreeItem, lookupGetter): TreeItem {
    let treeItem = { ...newTreeItem };
    let parentLookup = lookupGetter().parentLookup;
    let parentItem = parentLookup[treeItem.id];

    while (parentItem != null) {
        const childIndex = parentItem.children.findIndex((item) => item.id === treeItem.id);
        let modifiedChildren = [...parentItem.children];
        modifiedChildren.splice(childIndex, 1, treeItem);
        treeItem = {
            ...parentItem,
            children: modifiedChildren
        };
        parentItem = parentLookup[treeItem.id];
    }
    return treeItem;
}

export function updateTree(root: TreeItem[], newTreeItem: TreeItem, lookupGetter): TreeItem[] {
    const rebuiltSubtree = rebuildTree(newTreeItem, lookupGetter);
    const index = root.findIndex((item) => item.id === rebuiltSubtree.id);
    let modifiedRoot = [...root];
    modifiedRoot.splice(index, 1, rebuiltSubtree);
    return modifiedRoot;
}

export function expandOrCollapseTreeItem(root: TreeItem[], treeItemToExpand: TreeItem, lookupGetter): TreeItem[] {
    const flippedTreeItem: TreeItem = {
        ...treeItemToExpand,
        expanded: !treeItemToExpand.expanded
    };
    return updateTree(root, flippedTreeItem, lookupGetter);
}
