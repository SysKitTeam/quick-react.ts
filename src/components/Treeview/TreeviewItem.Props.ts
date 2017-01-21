import * as React from 'react';

export interface ITreeviewItemProps {
    item?: ITreeviewItem;
    onChange?: (ev?: React.FormEvent<HTMLElement>, itemId?: string, checked?: boolean) => void;
}

export interface ITreeviewItem {
    text?: string;
    id?: string;
    children?: ITreeviewItem[];
    isOpen?: boolean;
    checked?: boolean;
}
