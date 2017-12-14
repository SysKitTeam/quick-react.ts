import * as React from 'react';
import { Principal } from './Principal';

export interface IPrincipalProps extends React.Props<Principal> {
    principal?: IPrincipal;
    iconName?: string;
    isSelected?: boolean;
    onSelect?(principal: IPrincipal): void;
    onDelete?(principal: IPrincipal): void;
}

export interface IPrincipal {
    id: number;
    displayName: string;
    email: string;
}
