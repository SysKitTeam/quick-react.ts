import * as React from 'react';

export interface ITreeviewItemProps {
    item?: ITreeviewItem;
    onChange?: (ev?: React.FormEvent<HTMLElement>, itemIds?: Array<string>, checked?: boolean) => void;
    showCheckbox?: boolean;
    children?: ITreeviewItem[];
    recursive?: boolean;
    className?: string;
    expandParentOnClick: boolean;
    onExpand: (itemId: string, expanded: boolean) => void;
}

export interface IHoverOverBtn {
    iconName: string;
    callback: (id: string) => void;
}

export interface ITreeviewItem {
    text?: string;
    id?: string;
    children?: ITreeviewItem[];
    isOpen?: boolean;
    checked?: boolean;
    parentId?: string;
    hoverOverBtn?: Array<IHoverOverBtn>;
    className?: string;
}

export function MapChildren(currentItem: ITreeviewItem, allItems: ITreeviewItem[]): ITreeviewItem[] {
    const children = allItems.filter((element) => {
        return (element.parentId === currentItem.id);
    });

    children.forEach((element) => {
        let grandChildren = MapChildren(element, allItems);
        element.children = grandChildren;
    });

    return children;
}
