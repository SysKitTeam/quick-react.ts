import * as React from 'react';
import { ITreeviewItem } from './TreeviewItem.Props';

export interface ITreeviewProps {
    label?: string;
    className?: string;
    items?: ITreeviewItem[];
    onSelect?: (ev?: React.FormEvent<HTMLElement>, itemsId?: string[], checked?: boolean) => void;
    onExpand?: (itemId: string, expanded: boolean) => void;
    showCheckbox?: boolean;
    recursive?: boolean;
    expandOnClick?: boolean;
}

export const defaultTreeviewProps: ITreeviewProps = {
    expandOnClick: false
};
