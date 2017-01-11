import * as React from 'react';
import { Button } from './Button';

export interface IButton { focus(); }

export interface IButtonProps extends React.HTMLProps < HTMLButtonElement | HTMLAnchorElement | Button > {
    isVisible ?: boolean;
    href ?: string;
    icon ?: string;
    description ?: string;
    disabled ?: boolean;
    className ?: string;
    onClick ?: React.MouseEventHandler;
    ariaLabel ?: string;
    ariaDescription ?: string;
    buttonType ?: ButtonType;
}

export enum ElementType { button, anchor }

export enum ButtonType {
    normal,
    primary
}
