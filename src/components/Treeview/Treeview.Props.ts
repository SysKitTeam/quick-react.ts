import * as React from 'react';
import { ITreeviewItem } from './TreeviewItem.Props';

export interface ITreeviewProps {
    label?: string;
    className?: string;
    items?: ITreeviewItem[];
    onCheckboxChanged?: (ev?: React.FormEvent<HTMLInputElement>, itemId?: string, checked?: boolean) => void;
}
