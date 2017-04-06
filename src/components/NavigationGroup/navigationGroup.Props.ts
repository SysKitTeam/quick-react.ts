import * as React from 'react';

export interface INavigationGroupItem {
    text: string;
    disabled: boolean;
    Key: number;
}

export interface INavigationGroupCategory {
    text: string;
    items: INavigationGroupItem[];
}

export interface INavigationGroupProps {
    Category: INavigationGroupCategory;
    onNavigationItemClicked: (itemId: string) => void;
}