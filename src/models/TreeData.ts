import * as _ from 'lodash';
import { IDictionary } from '../utilities/common';
import { IObservable } from '../utilities/observable';
import { removeLookupEntry, addLookupEntry } from '../utilities/immutable';

export interface TreeNode { // extend this interface on a data structure to be used for row data    
    isExpanded?: boolean;
    children?: Array<TreeNode>;
    hasChildren?: boolean;
    iconName?: string;
    iconTooltipContent?: string;
    iconClassName?: string;
    id?: string;
    className?: string;
}

export interface IFinalTreeNode extends TreeNode {
    nodeId?: number;
    parentId?: number; // nodeId of the parent node
    nodeLevel: number;
    sortRequestId: number;
    isLazyChildrenLoadInProgress?: boolean;
    isAsyncLoadingDummyNode?: boolean;
    children: Array<IFinalTreeNode>;
    parent: IFinalTreeNode;
    satisfiesFilterCondition?: boolean;
    descendantSatisfiesFilterCondition?: boolean;
}

export interface ILookupTable {
    [id: number]: IFinalTreeNode;
}

export type IdGetter = (node: TreeNode) => string | number;

const defaultIdMember = (node: IFinalTreeNode) => node.nodeId;

/**
 * This class is meant to work with th TreeGrid component.
 * This class breaks the immutability principle of redux
 * but all mutation is done within this class and in conjunction with the TreeGrid component
 * This is done because of performance reasons
 * it is important to be aware of the fact that the input data for this datasource will be mutated
 * the mutation will occur when this class is created, also all operations that mutate the data.
 * All operations that mutate the data will return a new instance of TreeDataSource
 * this allows us to view the TreeDataSource as immutable when performing actions in our reducers
 * ie. we add a new child to the tree, react will register the change and the TreeGrid component will update because of the prop change
 */
export class TreeDataSource implements IObservable<React.Component> {
    private subscribers: Array<React.Component> = [];

    public subscribe(listener: React.Component<{}, {}>): void {
        this.subscribers.push(listener);
    }

    public unsubscribe(listener: React.Component<{}, {}>): void {
        const index = this.subscribers.findIndex(l => Object.is(listener, l));
        this.subscribers.slice(index, 1);
    }

    public notify = () => this.subscribers.forEach(l => l.forceUpdate());

    private idCounter: number = 0;

    // this would constitute a really dirty hack
    // React shallow compares each prop that is an object before even calling ShouldComponentUpdate    
    // To force react to event consider updating a component(event if it is not pure) we need to pass an object that has some change
    // Since we are copying everything from the previous iteration we need at least one field that actually changes    
    private changeIteration: number = 0;
    private treeStructure: IFinalTreeNode;
    public isEmpty: boolean;

    /** Lookup that holds parent object for given node */
    // private parentLookup: ILookupTable;

    /** Lookup that returns node object for given node id */
    private nodesById: ILookupTable;

    private idMember: string | IdGetter;

    // items used for row selection
    private selectedIds: IDictionary<boolean>;
    private partiallySelectedIds: IDictionary<boolean>;

    get SelectedNodes(): IDictionary<boolean> {
        return this.selectedIds;
    }

    get PartiallySelectedNodes(): IDictionary<boolean> {
        return this.partiallySelectedIds;
    }

    /**
     * 
     * @param root warning: will be mutated and returned as ITreeDataSource
     */
    constructor(input: TreeNode | TreeDataSource | Array<any>, idMember: (string | IdGetter) = defaultIdMember) {
        this.idMember = idMember;
        this.partiallySelectedIds = {};
        this.selectedIds = {};

        if (this.isDataSource(input)) {
            this.nodesById = input.nodesById;
            this.idCounter = input.idCounter;
            this.treeStructure = input.treeStructure;
            this.changeIteration = input.changeIteration + 1;
        } else {
            let rootNode: TreeNode = this.isRootNodesArray(input) ? { children: input } : input;
            this.nodesById = {};
            this.extendNodes(input, rootNode.children, 0);
            this.treeStructure = <IFinalTreeNode>rootNode;
            this.isEmpty = this.treeStructure.children.length === 0;
        }
    }

    /**
     * Returns unique parameter for given node.
     */
    private getIdMember = (node: TreeNode): string | number => {
        if (typeof this.idMember === 'function') {
            return this.idMember(node);
        }

        if (!node.hasOwnProperty(this.idMember)) {
            throw Error('Object doesn\'t have specified property for given key.');
        }

        return node[this.idMember];
    }

    public updateSelectedItems = (node: IFinalTreeNode) => {
        // get all selected items from this node up to all children
        const selectedIds = this.recursiveChildSelection(node);

        // merge old selected items and new selected items
        this.selectedIds = { ...this.selectedIds, ...selectedIds };

        const nodeId = this.getIdMember(node);

        // if it was partially selected before, remove it from partial selection
        if (this.partiallySelectedIds.hasOwnProperty(nodeId)) {
            this.partiallySelectedIds = removeLookupEntry(nodeId, this.partiallySelectedIds);
        }

        if (this.checkObject(node.parent) && this.getIdMember(node) !== undefined) {
            this.checkIfAllChildrenAreSelected(node.parent, nodeId, selectedIds);
        }

        this.notify();
    }

    private partiallySelectItem = (node: IFinalTreeNode) => {
        const nodeId = this.getIdMember(node);

        this.partiallySelectedIds[nodeId] = true;
        this.partiallySelectedIds = { ...this.partiallySelectedIds };

        if (this.checkObject(node.parent)) {
            return;
        }

        this.partiallySelectItem(node.parent);
    }

    private checkIfAllChildrenAreSelected = (
        node: IFinalTreeNode,
        childNodeId: number | string,
        nodeChildrenSubset: IDictionary<boolean>
    ) => {
        const nodeId = this.getIdMember(node);
        const allChildren = { ...this.recursiveChildSelection(node, false, { [childNodeId]: true }), ...nodeChildrenSubset };
        const allChildrenKeys = Object.keys(allChildren);
        const allSelectedItemKeys = Object.keys(this.selectedIds);
        const diff = _.difference(allChildrenKeys, allSelectedItemKeys);

        if (diff.length === allChildrenKeys.length) {
            this.partiallySelectedIds = removeLookupEntry(nodeId, this.partiallySelectedIds);
            if (this.checkObject(node.parent) && this.getIdMember(node.parent) !== undefined) {
                this.checkIfAllChildrenAreSelected(node.parent, nodeId, allChildren);
            }
        } else if (diff.length === 0) {
            this.partiallySelectedIds = removeLookupEntry(nodeId, this.partiallySelectedIds);
            this.selectedIds = addLookupEntry(nodeId, true, this.selectedIds);

            if (this.checkObject(node.parent) && this.getIdMember(node.parent) !== undefined) {
                this.checkIfAllChildrenAreSelected(node.parent, nodeId, allChildren);
            }
        } else {
            this.selectedIds = removeLookupEntry(nodeId, this.selectedIds);
            this.partiallySelectItem(node);
        }
    }

    public removeSelectedItems = (node: IFinalTreeNode) => {
        const selectedIds = this.recursiveChildSelection(node);
        const keysToRemove = Object.keys(selectedIds);
        const oldKeys = Object.keys(this.selectedIds);
        const newSelected = _.without(oldKeys, ...keysToRemove);
        const newSelectedDict = {};
        for (let i = 0; i < newSelected.length; i++) {
            newSelectedDict[newSelected[i]] = true;
        }
        this.selectedIds = { ...newSelectedDict };

        if (this.checkObject(node.parent) && this.getIdMember(node.parent) !== undefined) {
            this.checkIfAllChildrenAreSelected(node.parent, this.getIdMember(node), selectedIds);
        }
        this.notify();
    }

    public removeSelectedItem = (node: TreeNode) => {
        const nodeId = this.getIdMember(node);
        if (!Object.hasOwnProperty(nodeId)) {
            return;
        }

        delete this.selectedIds[nodeId];
        return { ...this.selectedIds };
    }

    public setSelectedItem = (item: TreeNode) => {
        const selectedIdObj = {};
        selectedIdObj[item.id] = true;
        this.selectedIds = { ...this.selectedIds, ...selectedIdObj };
    }

    private checkObject = (obj: any): boolean => {
        if (obj === undefined || obj === null) {
            return false;
        }
        return true;
    }

    /**
     * Return lookup table off all child ids
     */
    private recursiveChildSelection = (
        node: IFinalTreeNode,
        appendParentNode: boolean = true,
        skipItems: IDictionary<boolean> = {}
    ): IDictionary<boolean> => {
        let selectedIds = {};

        // end of recursion
        if (!this.itemHasChildren(node)) {
            return selectedIds;
        }

        if (appendParentNode) {
            const nodeId = this.getIdMember(node);
            selectedIds[nodeId] = true;
        }

        const itemCount = node.children.length;
        for (let i = 0; i < itemCount; i++) {
            const child = node.children[i];
            // get id of child
            const childId = this.getIdMember(child);
            if (skipItems[childId]) {
                continue;
            }

            // add child to lookup
            selectedIds[childId] = true;
            // call recursive
            const recursiveSelection = this.recursiveChildSelection(child, false, skipItems);
            selectedIds = { ...selectedIds, ...recursiveSelection };
        }

        return selectedIds;
    }

    private itemHasChildren = (item: TreeNode) => {
        if (!this.checkObject(item.children)) {
            return false;
        }
        return item.children.length !== 0;
    }

    private extendNodes(parent, children: Array<TreeNode>, level: number) {
        for (let node of children) {
            let extendedNode = <IFinalTreeNode>node;
            extendedNode.nodeId = this.getNextId();
            extendedNode.parent = parent;
            if (extendedNode.parent) {
                extendedNode.parentId = extendedNode.parent.nodeId;
            }
            extendedNode.nodeLevel = level;
            this.nodesById[extendedNode.nodeId] = extendedNode;
            if (node.children && node.children.length > 0) {
                this.extendNodes(node, node.children, level + 1);
            }
        }
    }

    private isDataSource(input: TreeNode | TreeDataSource | Array<any>): input is TreeDataSource {
        return (<TreeDataSource>input).updateNode !== undefined;
    }

    private isRootNodesArray(input: TreeNode | TreeDataSource | Array<any>): input is Array<any> {
        return (<Array<any>>input).slice !== undefined;
    }

    public updateNode<T>(nodeId: number, props: Partial<IFinalTreeNode & T>): TreeDataSource;
    public updateNode(nodeId: number, props: Partial<IFinalTreeNode>): TreeDataSource {
        let existingNode = this.nodesById[nodeId];
        if (existingNode) {

            // we do not want to use the spread operator, we want to reause the existing treenode            
            // existingNode = { ...existingNode, ...props };

            // if the children will be replaced, we need to remove the old ids
            if (props.children && existingNode.children && existingNode.children.length > 0) {
                const removeChildrenFromLookup = (node) => {
                    if (node && node.children) {
                        for (let i = 0; i < node.children.length; i++) {
                            delete this.nodesById[node.children[i].nodeId];
                            removeChildrenFromLookup(node.children[i]);
                        }
                    }
                };
                removeChildrenFromLookup(existingNode);
            }

            Object.assign(existingNode, props);

            if (props.children) {
                existingNode.isLazyChildrenLoadInProgress = false;
                existingNode.hasChildren = props.children && props.children.length > 0;
                existingNode.isExpanded = existingNode.isExpanded && existingNode.hasChildren;
                this.extendNodes(existingNode, existingNode.children, existingNode.nodeLevel + 1);
            }
            this.isEmpty = this.treeStructure.children.length === 0;
            return new TreeDataSource(this);
        }
        return this;
    }

    private getNextId(): number {
        return ++this.idCounter;
    }

    public getTreeStructure(): IFinalTreeNode {
        return this.treeStructure;
    }

    public getNodeById<T>(nodeId: number): IFinalTreeNode & T;
    public getNodeById(nodeId: number): IFinalTreeNode {
        return this.nodesById[nodeId];
    }

    public findNode<T>(nodePredicate: (node: IFinalTreeNode & T) => boolean): IFinalTreeNode & T;
    public findNode(nodePredicate: (node: IFinalTreeNode) => boolean): IFinalTreeNode {
        // tslint:disable-next-line:forin
        for (let key in this.nodesById) {
            let candidate = this.nodesById[key];
            if (nodePredicate(candidate)) {
                return candidate;
            }
        }
        return undefined;
    }
}
