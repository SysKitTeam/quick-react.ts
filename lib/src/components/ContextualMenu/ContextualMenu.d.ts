import { IContextualMenuProps, IContextualMenuItem } from './ContextualMenu.Props';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { CommonComponent } from '../Common/Common';
import './ContextualMenu.scss';
export declare function hasSubmenuItems(item: IContextualMenuItem): boolean;
export interface IContextualMenuState {
    expandedMenuItemKey?: string;
    dismissedMenuItemKey?: string;
    contextualMenuItems?: IContextualMenuItem[];
    contextualMenuTarget?: HTMLElement;
    submenuProps?: IContextualMenuProps;
    positions?: any;
    slideDirectionalClassName?: string;
    subMenuId?: string;
    submenuDirection?: DirectionalHint;
}
export declare class ContextualMenu extends CommonComponent<IContextualMenuProps, IContextualMenuState> {
    static defaultProps: {
        items: any[];
        shouldFocusOnMount: boolean;
        isBeakVisible: boolean;
        gapSpace: number;
        directionalHint: DirectionalHint;
        beakWidth: number;
    };
    private _host;
    private _previousActiveElement;
    private _isFocusingPreviousElement;
    private _enterTimerId;
    private _targetWindow;
    private _target;
    constructor(props: IContextualMenuProps);
    render(): any;
    dismiss(ev?: any, dismissAll?: boolean): void;
    private _onKeyDown(ev);
    componentWillUpdate(newProps: IContextualMenuProps): void;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private _setTargetWindowAndElement(target);
    private _renderMenuItem(item, index, hasCheckmarks, hasIcons);
    private _renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
    private _renderIcon(item);
    private _onAnchorClick(item, ev);
    private _executeItemClick(item, ev);
    private _renderMenuItemChildren(item, index, hasCheckmarks, hasIcons);
    private _onItemMouseEnter(item, ev);
    private _onMouseLeave(ev);
    private _onItemMouseDown(item, ev);
    private _renderButtonItem(item, index, hasCheckmarks?, hasIcons?);
    private _onItemKeyDown(item, ev);
    private _onItemSubMenuExpand(item, target);
    private _onSubMenuDismiss(ev?, dismissAll?);
    private _onItemClick(item, ev);
}
