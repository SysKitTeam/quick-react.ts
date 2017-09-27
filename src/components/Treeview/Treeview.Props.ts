import * as React from 'react';
import { ITreeviewItem } from './TreeviewItem.Props';

const nullFunc = () => { };

export interface ITreeviewProps {
    label?: string;
    className?: string;
    items?: ITreeviewItem[];
    onSelect?: (ev?: React.FormEvent<HTMLElement>, itemsId?: string[], checked?: boolean) => void;
    onExpand?: (itemId: string, expanded: boolean) => void;
    showCheckbox?: boolean;
    recursive?: boolean;
    expandParentOnClick?: boolean;
}

export const defaultTreeviewProps: ITreeviewProps = {
    expandParentOnClick: false
};
