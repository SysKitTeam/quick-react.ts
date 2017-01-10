import * as React from 'react';
import { Button } from './Button';
import { IconName } from '../Icon/IconName';
export interface IButton {
    focus(): any;
}
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement | HTMLAnchorElement | Button> {
    isVisible?: boolean;
    href?: string;
    icon?: IconName;
    description?: string;
    disabled?: boolean;
    className?: string;
    onClick?: React.MouseEventHandler;
    ariaLabel?: string;
    ariaDescription?: string;
    buttonType?: ButtonType;
}
export declare enum ElementType {
    button = 0,
    anchor = 1,
}
export declare enum ButtonType {
    normal = 0,
    primary = 1,
}
