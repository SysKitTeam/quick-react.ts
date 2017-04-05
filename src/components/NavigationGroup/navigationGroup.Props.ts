import * as React from 'react';

export interface INavigationGroupItem {
    text: string;
    tooltip?: string;
    disabled: boolean;
    Key: string;
}

export interface INavigationGroupCategory {
    text: string;
    items: INavigationGroupItem[];
}

export interface INavigationGroupProps {
    Category: INavigationGroupCategory;
    onNavigationItemClicked: (itemId: string) => void;
}