import * as React from 'react';
import { ITreeviewItem } from './TreeviewItem.Props';

export interface ITreeviewProps {
    label?: string;
    className?: string;
    items?: ITreeviewItem[];
    onCheckboxChanged?: (ev?: React.FormEvent, itemId?: string, checked?: boolean) => void;
}
