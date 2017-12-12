import { TreeItem } from '../components/TreeFilter/TreeFilter.Props';
import { ILookupTable } from '../components/TreeFilter/TreeItemOperators';

export function rebuildTree(treeItem: TreeItem, newTreeItem: TreeItem): [TreeItem | boolean] {
    if (treeItem === null) {
        return [treeItem, false];
    }

    if (treeItem.id === newTreeItem.id) {
        return [newTreeItem, true];
    } else {
        if (treeItem.children == null) {
            return [treeItem, false];
        }
        for (const child of treeItem.children) {
            const subtree = rebuildTree(child, newTreeItem);
            if (subtree[1]) {
                const childIndex = treeItem.children.indexOf(child);
                let modifiedChildren = [...treeItem.children];
                modifiedChildren.splice(childIndex, 1, subtree[0] as TreeItem);
                const rebuiltTreeItem: TreeItem = {
                    ...treeItem,
                    children: modifiedChildren
                };
                return [rebuiltTreeItem, true];
            }
        }
        return [treeItem, false];
    }
}

export function rebuildTree2(newTreeItem: TreeItem, lookupGetter): TreeItem {
    let treeItem = { ...newTreeItem };
    let parentLookup = lookupGetter().parentLookup;
    let parentItem = parentLookup[treeItem.id];

    while (parentItem != null) {
        const childIndex = parentItem.children.indexOf(treeItem);
        let modifiedChildren = [...parentItem.children];
        modifiedChildren.splice(childIndex, 1, treeItem);
        treeItem = {
            ...parentItem,
            children: modifiedChildren
        };
        parentItem = lookupGetter().parentLookup[treeItem.id];
    }
    return treeItem;
}

export function updateTree(root: TreeItem[], newTreeItem: TreeItem, lookupGetter): TreeItem[] {
    let t0 = performance.now();
    const rebuiltSubtree = rebuildTree2(newTreeItem, lookupGetter);
    let t1 = performance.now();
    console.log('Rebuilding: ' + (t1 - t0));
    t0 = performance.now();
    const rootTreeItemToReplace = root.find((item) => item.id === rebuiltSubtree.id);
    const index = root.indexOf(rootTreeItemToReplace);
    let modifiedRoot = [...root];
    modifiedRoot.splice(index, 1, rebuiltSubtree);
    t1 = performance.now();
    console.log("Rooting: " + (t1 - t0));
    return modifiedRoot;
}

export function expandOrCollapseTreeItem(root: TreeItem[], treeItemToExpand: TreeItem, lookupGetter): TreeItem[] {
    const flippedTreeItem: TreeItem = {
        ...treeItemToExpand,
        expanded: !treeItemToExpand.expanded
    };
    return updateTree(root, flippedTreeItem, lookupGetter);
}
