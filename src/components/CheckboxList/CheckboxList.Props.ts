import * as React from 'react';
import { ICheckboxListItem } from './CheckboxListItem.Props';

export interface ICheckboxListProps {
    label?: string;
    className?: string;
    items?: ICheckboxListItem[];
    onCheckboxChanged?: (ev?: React.FormEvent<HTMLInputElement>, itemId?: string, checked?: boolean) => void;
}
