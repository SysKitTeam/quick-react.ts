import * as React from 'react';

export interface ITreeviewItemProps {
    item ?: ITreeviewItem;
}

export interface ITreeviewItem {
    text ?: string;
    id ?: string;
    children ?: ITreeviewItem[];
    isOpen ?: boolean;
    checked ?: boolean;
}