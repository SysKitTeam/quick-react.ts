import * as React from 'react';
import { IContextualMenuProps, IContextualMenuItem } from './ContextualMenu.Props';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { anchorAttributes, buttonAttributes, getNativeAttributes } from '../../utilities/attributes';
import { assign } from '../../utilities/object';
import { getId } from '../../utilities/getId';
import { getRTL } from '../../utilities/rtl';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import { KeyCodes } from '../../utilities/KeyCodes';
import { getDocument, getWindow } from '../../utilities/getDocument';
import { CommonComponent } from '../Common/Common';
import { Icon } from '../Icon/Icon';
import { Callout } from '../Callout/Callout';
import { IIconProps } from '../Icon/Icon.Props';
import './ContextualMenu.scss';

export function hasSubmenuItems(item: IContextualMenuItem) {
    let submenuItems = item.items;
    return !!(submenuItems && submenuItems.length);
}

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

export class ContextualMenu extends CommonComponent<IContextualMenuProps, IContextualMenuState> {

    public static defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        isBeakVisible: false,
        gapSpace: 0,
        directionalHint: DirectionalHint.bottomAutoEdge,
        beakWidth: 16
    };

    private _host: HTMLElement;
    private _previousActiveElement: HTMLElement;
    private _isFocusingPreviousElement: boolean;
    private _enterTimerId: number;
    private _targetWindow: Window;
    private _target: HTMLElement | MouseEvent;

    constructor(props: IContextualMenuProps) {
        super(props);
        this.state = {
            contextualMenuItems: null,
            subMenuId: getId('contextualMenu')
        };

        this._isFocusingPreviousElement = false;
        this._enterTimerId = 0;
    }


    public render() {
        let { className,
            items,
            isBeakVisible,
            labelElementId,
            id,
            targetPoint,
            useTargetPoint,
            beakWidth,
            directionalHint,
            gapSpace,
            coverTarget,
            ariaLabel,
            doNotLayer,
            target } = this.props;

        let { submenuProps, expandedMenuItemKey } = this.state;

        let hasIcons = !!(items && items.some(item => !!item.iconProps));
        let hasCheckmarks = !!(items && items.some(item => !!item.canCheck));
        
        return (
            <Callout
                target={target}
                targetPoint={targetPoint}
                useTargetPoint={useTargetPoint}
                isBeakVisible={isBeakVisible}
                beakWidth={beakWidth}
                directionalHint={directionalHint}
                gapSpace={gapSpace}
                coverTarget={coverTarget}
                doNotLayer={doNotLayer}
                className={classNames('contextualMenu-Callout', { 'is-expanded': !(expandedMenuItemKey === null || expandedMenuItemKey === undefined) })}
                setInitialFocus={true}
                onDismiss={this.props.onDismiss}>
                <div ref={(host: HTMLDivElement) => this._host = host} id={id} className={classNames('contextualMenu-container', className)}>
                    {(items && items.length) ? (
                        <div className={'contextualMenu is-open'}>
                            <ul
                                className={'contextualMenu-list is-open'}
                                onKeyDown={this._onKeyDown}
                                aria-label={ariaLabel} >
                                {items.map((item, index) => (
                                    item.name === '-' ? (
                                        <li
                                            role="separator"
                                            key={item.key || index}
                                            className={classNames('contextualMenu-divider', item.className)} />
                                    ) : (
                                            <li
                                                role="menuitem"
                                                title={item.title}
                                                key={item.key || index}
                                                className={classNames('contextualMenu-item', item.className)}>
                                                {this._renderMenuItem(item, index, hasCheckmarks, hasIcons)}
                                            </li>
                                        )
                                ))}
                            </ul>
                        </div>
                    ) : (null)}
                    {submenuProps ? ( // If a submenu properities exists, the submenu will be rendered.
                        <ContextualMenu { ...submenuProps } />
                    ) : (null)}
                </div>
            </Callout>
        );
    }

    @autobind
    public dismiss(ev?: any, dismissAll?: boolean) {
        let {
            onDismiss
        } = this.props;
        if (onDismiss) { onDismiss(ev, dismissAll); }
    }

    @autobind
    private _onKeyDown(ev: React.KeyboardEvent<any>) {
        let submenuCloseKey = getRTL() ? KeyCodes.right : KeyCodes.left;

        if (ev.which === KeyCodes.escape
            || ev.which === KeyCodes.tab
            || (ev.which === submenuCloseKey && this.props.isSubMenu)) {
            // When a user presses escape, we will try to refocus the previous focused element.
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
        }
    }

    public componentWillUpdate(newProps: IContextualMenuProps) {
        if (newProps.target !== this.props.target) {
            let newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    }

    public componentWillMount() {
        let target = this.props.target;
        this._setTargetWindowAndElement(target);

        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement as HTMLElement : null;
    }

    public componentDidMount() {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
    }

    public componentWillUnmount() {
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            setTimeout(() => this._previousActiveElement.focus(), 0);
        }

        this._events.dispose();
    }

    private _setTargetWindowAndElement(target: HTMLElement | string | MouseEvent): void {
        if (target) {
            if (typeof target === 'string') {
                let currentDoc: Document = getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) as HTMLElement : null;
                this._targetWindow = getWindow();
            } else if ((target as MouseEvent).stopPropagation) {
                this._target = target;
                this._targetWindow = getWindow((target as MouseEvent).toElement as HTMLElement);
            } else {
                let targetElement: HTMLElement = target as HTMLElement;
                this._target = target;
                this._targetWindow = getWindow(targetElement);
            }
        } else {
            this._targetWindow = getWindow();
        }
    }

    private _renderMenuItem(item: IContextualMenuItem, index: number, hasCheckmarks: boolean, hasIcons: boolean) {
        if (item.onRender) {
            return item.onRender(item);
        }

        if (item.href) {
            return this._renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
        }

        return this._renderButtonItem(item, index, hasCheckmarks, hasIcons);
    }

    private _renderAnchorMenuItem(item: IContextualMenuItem, index: number, hasCheckmarks: boolean, hasIcons: boolean): JSX.Element {
        return (
            <div>
                <a
                    { ...getNativeAttributes(item, anchorAttributes) }
                    href={item.href}
                    className={classNames('contextualMenu-link contextualMenu-anchor-link', item.disabled ? 'is-disabled' : '')}
                    role="menuitem"
                    target="_blank"
                    onClick={this._onAnchorClick.bind(this, item)}>
                    {(hasIcons) ? (
                        this._renderIcon(item)
                    ) : (null)}
                    <span className={'contextualMenu-linkText'}> {item.name} </span>
                </a>
            </div >
        );
    }

    private _renderIcon(item: IContextualMenuItem) {
        let iconProps: IIconProps = item.iconProps;
        let iconColorClassName = iconProps !== undefined && iconProps.iconName === '' ? '' : 'contextualMenu-iconColor';
        let iconClassName = classNames('contextualMenu-icon', iconColorClassName, iconProps !== undefined && iconProps.className !== undefined ? iconProps.className : '');

        return <Icon { ...iconProps } className={iconClassName} />;
    }

    private _onAnchorClick(item: IContextualMenuItem, ev: MouseEvent) {
        this._executeItemClick(item, ev);
        ev.stopPropagation();
    }

    private _executeItemClick(item: any, ev: MouseEvent) {
        if (item.onClick) {
            item.onClick(ev, item);
        }

        this.dismiss(ev, true);
    }

    private _renderMenuItemChildren(item: IContextualMenuItem, index: number, hasCheckmarks: boolean, hasIcons: boolean) {
        let isItemChecked: boolean = item.checked;

        return (
            <div className="contextualMenu-linkContent">
                {(hasCheckmarks) ? (
                    <Icon
                        iconName={isItemChecked ? 'icon-checkmark' : ''}
                        className={'contextualMenu-icon'}
                        onClick={this._onItemClick.bind(this, item)} />
                ) : (null)}
                {(hasIcons) ? (
                    this._renderIcon(item)
                ) : (null)}
                <span className={'contextualMenu-itemText'}>{item.name}</span>
                {(item.items && item.items.length) ? (
                    <Icon className={'contextualMenu-submenu-chevron'} iconName={getRTL() ? 'icon-arrow_L' : 'icon-arrow_R'} />
                ) : (null)}
            </div>
        );
    }

    private _onItemMouseEnter(item: any, ev: React.MouseEvent<HTMLElement>) {
        let targetElement = ev.currentTarget as HTMLElement;

        if (item.key !== this.state.expandedMenuItemKey) {
            if (item.items && item.items.length && !item.disabled) {
                this._enterTimerId = this._async.setTimeout(() => this._onItemSubMenuExpand(item, targetElement), 500);
            } else {
                this._enterTimerId = this._async.setTimeout(() => this._onSubMenuDismiss(ev), 500);
            }
        }
    }

    @autobind
    private _onMouseLeave(ev: React.MouseEvent<HTMLElement>) {
        this._async.clearTimeout(this._enterTimerId);
    }

    private _onItemMouseDown(item: IContextualMenuItem, ev: React.MouseEvent<HTMLElement>) {
        if (item.onMouseDown) {
            item.onMouseDown(item, ev);
        }
    }

    private _renderButtonItem(item: IContextualMenuItem, index: number, hasCheckmarks?: boolean, hasIcons?: boolean) {
        let { expandedMenuItemKey, subMenuId } = this.state;
        let ariaLabel = '';

        if (item.ariaLabel) {
            ariaLabel = item.ariaLabel;
        } else if (item.name) {
            ariaLabel = item.name;
        }

        let itemButtonProperties = {
            className: classNames('contextualMenu-link', { 'is-expanded': (expandedMenuItemKey === item.key) }),
            onClick: this._onItemClick.bind(this, item),
            onKeyDown: item.items && item.items.length ? this._onItemKeyDown.bind(this, item) : null,
            onMouseEnter: this._onItemMouseEnter.bind(this, item),
            onMouseLeave: this._onMouseLeave,
            onMouseDown: (ev: any) => this._onItemMouseDown(item, ev),
            disabled: item.disabled,
            role: 'menuitem',
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': item.items && item.items.length ? true : null,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null
        };

        return React.createElement(
            'button',
            assign(
                {},
                getNativeAttributes(item, buttonAttributes), itemButtonProperties),
            this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons)
        );
    }

    private _onItemKeyDown(item: any, ev: KeyboardEvent) {
        let openKey = getRTL() ? KeyCodes.left : KeyCodes.right;

        if (ev.which === openKey) {
            this._onItemSubMenuExpand(item, ev.currentTarget as HTMLElement);
        }
    }

    private _onItemSubMenuExpand(item: any, target: HTMLElement) {
        if (this.state.expandedMenuItemKey !== item.key) {

            if (this.state.submenuProps) {
                this._onSubMenuDismiss();
            }

            this.setState({
                expandedMenuItemKey: item.key,
                submenuProps: {
                    items: item.items,
                    target: target,
                    onDismiss: this._onSubMenuDismiss,
                    isSubMenu: true,
                    id: this.state.subMenuId,
                    shouldFocusOnMount: true,
                    directionalHint: getRTL() ? DirectionalHint.leftTopEdge : DirectionalHint.rightTopEdge,
                    className: this.props.className,
                    gapSpace: 0
                }
            });
        }
    }

    @autobind
    private _onSubMenuDismiss(ev?: any, dismissAll?: boolean) {
        if (dismissAll) {
            this.dismiss(ev, dismissAll);
        } else {
            this.setState({
                dismissedMenuItemKey: this.state.expandedMenuItemKey,
                expandedMenuItemKey: null,
                submenuProps: null
            });
        }
    }

    private _onItemClick(item: any, ev: MouseEvent) {
        if (item.key !== this.state.expandedMenuItemKey) {
            if (!item.items || !item.items.length) {
                this._executeItemClick(item, ev);
            } else {
                if (item.key === this.state.dismissedMenuItemKey) {
                    this._onSubMenuDismiss(ev);
                } else {
                    this._onItemSubMenuExpand(item, ev.currentTarget as HTMLElement);
                }
            }
        }
        ev.stopPropagation();
        ev.preventDefault();
    }
}
