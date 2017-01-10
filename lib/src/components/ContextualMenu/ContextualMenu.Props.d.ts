import * as React from 'react';
import { ContextualMenu } from './ContextualMenu';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { IIconProps } from '../Icon/Icon.Props';
import { IRectangle } from '../../utilities/IRectangle';
import { IPoint } from '../../utilities/IPoint';
export interface IContextualMenuProps extends React.Props<ContextualMenu> {
    target?: HTMLElement | string | MouseEvent;
    directionalHint?: DirectionalHint;
    gapSpace?: number;
    beakWidth?: number;
    bounds?: IRectangle;
    useTargetPoint?: boolean;
    targetPoint?: IPoint;
    isBeakVisible?: boolean;
    coverTarget?: boolean;
    items: IContextualMenuItem[];
    labelElementId?: string;
    shouldFocusOnMount?: boolean;
    onDismiss?: (ev?: any, dismissAll?: boolean) => void;
    className?: string;
    isSubMenu?: boolean;
    id?: string;
    ariaLabel?: string;
    doNotLayer?: boolean;
}
export interface IContextualMenuItem {
    key: string;
    name: string;
    iconProps?: IIconProps;
    disabled?: boolean;
    canCheck?: boolean;
    checked?: boolean;
    data?: any;
    onClick?: (ev?: React.MouseEvent, item?: IContextualMenuItem) => void;
    href?: string;
    items?: IContextualMenuItem[];
    className?: string;
    ariaLabel?: string;
    title?: string;
    onRender?: (item: any) => React.ReactNode;
    onMouseDown?: (item: IContextualMenuItem, event: any) => void;
    [propertyName: string]: any;
}
