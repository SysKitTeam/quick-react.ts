import * as React from 'react';
import * as classNames from 'classnames';
import { IRibbonProps } from './Ribbon.Props';
import ContextualMenu, {hasSubmenuItems } from '../ContextualMenu/ContextualMenu';
import { IContextualMenuItem } from '../ContextualMenu/ContextualMenu.Props';
import EventGroup from '../../utilities/EventGroup';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import autobind from '../../utilities/autobind';
import { getId } from '../../utilities/getId';
import { buttonAttributes, divAttributes, getNativeAttributes } from '../../utilities/attributes';
import Icon from '../Icon/Icon';
import { IIconProps } from '../Icon/Icon.Props';
import { IconName } from '../Icon/IconName';

const OVERFLOW_KEY = 'overflow';
const OVERFLOW_WIDTH = 41.5;

export interface ICommandBarState {
  renderedItems?: IContextualMenuItem[];
  renderedOverflowItems?: IContextualMenuItem[];
  expandedMenuItemKey?: string;
  expandedMenuId?: string;
  contextualMenuItems?: IContextualMenuItem[];
  contextualMenuTarget?: HTMLElement;
  renderedFarItems?: IContextualMenuItem[];
}

export class Ribbon extends React.Component<IRibbonProps, ICommandBarState> {
  public static defaultProps = {
    items: [],
    overflowItems: [],
    farItems: []
  };

  public refs: {
    [key: string]: React.ReactInstance;
    commandSurface: HTMLElement;
    farCommandSurface: HTMLElement;
    commandBarRegion: HTMLElement;
    searchSurface: HTMLElement;
  };

  private _id: string;
  private _overflowWidth: number;
  private _commandItemWidths: { [key: string]: number };
  private _events: EventGroup;

  constructor(props: IRibbonProps) {
    super(props);

    this.state = this._getStateFromProps(props);

    this._id = getId('CommandBar');
    this._events = new EventGroup(this);
  }

  public componentDidMount() {
    this._updateItemMeasurements();
    this._updateRenderedItems();

    this._events.on(window, 'resize', this._updateRenderedItems);
  }

  public componentWillUnmount() {
    this._events.dispose();
  }

  public componentWillReceiveProps(nextProps: IRibbonProps) {
    this.setState(this._getStateFromProps(nextProps));
    this._commandItemWidths = null;
  }

  public componentDidUpdate(prevProps: IRibbonProps, prevStates: ICommandBarState) {
    if (!this._commandItemWidths) {
      this._updateItemMeasurements();
      this._updateRenderedItems();
    }
  }

  public render() {
    const { isSearchBoxVisible, searchPlaceholderText, className } = this.props;
    const { renderedItems, contextualMenuItems, expandedMenuItemKey, expandedMenuId, renderedOverflowItems, contextualMenuTarget, renderedFarItems } = this.state;
    let searchBox;

    if (isSearchBoxVisible) {
      searchBox = (
        <div className={'ms-CommandBarSearch'} ref={'searchSurface'}>
          <input className={'ms-CommandBarSearch-input'} type={'text'} placeholder={ searchPlaceholderText } />
          <div className={'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'}>
            <i className={'ms-Icon ms-Icon--Search'}></i>
          </div>
          <div className={'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'}>
            <i className={'ms-Icon ms-Icon--Cancel'}></i>
          </div>
        </div>
      );
    }

    return (
      <div className={ classNames('ms-CommandBar', className) } ref={'commandBarRegion'}>
        { searchBox }
          <div className={'ms-CommandBar-primaryCommands'} ref={'commandSurface'}>
            { renderedItems.map((item, index) => (
              this._renderItemInCommandBar(item, index, expandedMenuItemKey)
            )).concat((renderedOverflowItems && renderedOverflowItems.length) ? [
              <div className={'ms-CommandBarItem'} key={ OVERFLOW_KEY } ref={ OVERFLOW_KEY }>
                <button
                  id={ this._id + OVERFLOW_KEY }
                  className={ classNames('ms-CommandBarItem-link', { 'is-expanded': (expandedMenuItemKey === OVERFLOW_KEY) }) }
                  onClick={ this._onOverflowClick }
                  role={'menuitem'}
                  data-automation-id={'commandBarOverflow'}
                  >
                  <i className={'ms-CommandBarItem-overflow ms-Icon ms-Icon--More'} />
                </button>
              </div>
            ] : []) }
          </div>
          <div className={'ms-CommandBar-sideCommands'} ref={'farCommandSurface'}>
            { renderedFarItems.map((item, index) => (
              this._renderItemInCommandBar(item, index, expandedMenuItemKey, true)
            )) }
          </div>
        { (contextualMenuItems) ?
          (<ContextualMenu
            labelElementId={ expandedMenuId }
            className={'ms-CommandBar-menuHost'}
            items={ contextualMenuItems }
            target={ contextualMenuTarget }
            onDismiss={ this._onContextMenuDismiss }
            isBeakVisible={ true }
            directionalHint={ DirectionalHint.bottomAutoEdge }
            />
          ) : (null) }
      </div>
    );
  }

  private _renderItemInCommandBar(item: IContextualMenuItem, index: number, expandedMenuItemKey: string, isFarItem?: boolean) {
    const itemKey = item.key || String(index);
    const className = classNames(item.onClick ? 'ms-CommandBarItem-link' : 'ms-CommandBarItem-text', !item.name && 'ms-CommandBarItem--noName');
    const classNameValue = classNames(className, { 'is-expanded': (expandedMenuItemKey === item.key) });
    let hasIcon = !!item.iconProps;

    return <div className={ classNames('ms-CommandBarItem', item.className) } key={ itemKey } ref={ itemKey }>
      { (() => {
        if (item.onClick || item.items) {
          return <button
            { ...getNativeAttributes(item, buttonAttributes) }
            id={ this._id + item.key }
            className={ classNameValue }
            onClick={ (ev) => this._onItemClick(ev, item) }
            data-command-key={ index }
            aria-haspopup={ hasSubmenuItems(item) }
            role={'menuitem'}
            aria-label={ item.ariaLabel || item.name }
            >
            { (hasIcon) ? this._renderIcon(item) : (null) }
            { (!!item.name) && <span className={'ms-CommandBarItem-commandText'}>{ item.name }</span> }
            { hasSubmenuItems(item) ? (
              <i className={'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--ChevronDown'} />
            ) : (null) }
          </button>;
        } else {
          return <div
            { ...getNativeAttributes(item, divAttributes) }
            id={ this._id + item.key }
            className={ classNameValue }
            data-command-key={ index }
            aria-haspopup={ hasSubmenuItems(item) }
            >
            { (hasIcon) ? this._renderIcon(item) : (null) }
            <span className={'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'} aria-hidden={'true'} role={'presentation'}>{ item.name }</span>
          </div>;
        }
      })() }
    </div>;
  }

  private _renderIcon(item: IContextualMenuItem) {
    // Only present to allow continued use of item.icon which is deprecated.
    let iconProps: IIconProps = item.iconProps;

    // Use the default icon color for the known icon names
    let iconColorClassName = iconProps.iconName === IconName.None ? '' : 'ms-CommandBarItem-iconColor';
    let iconClassName = classNames('ms-CommandBarItem-icon', iconColorClassName, iconProps.className);

    return <Icon { ...iconProps } className={ iconClassName } />;
  }

  private _updateItemMeasurements() {
    if (this.refs[OVERFLOW_KEY] || (this.props.overflowItems && this.props.overflowItems.length)) {
      this._overflowWidth = OVERFLOW_WIDTH;
    } else {
      this._overflowWidth = 0;
    }

    if (!this._commandItemWidths) {
      this._commandItemWidths = {};
    }

    for (let i = 0; i < this.props.items.length; i++) {
      let item = this.props.items[i];

      if (!this._commandItemWidths[item.key]) {
        let el = this.refs[item.key] as HTMLElement;

        if (el) {
          this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
        }
      }
    }
  }

  private _updateRenderedItems() {
    let { items, overflowItems } = this.props;
    let commandSurface = this.refs.commandSurface;
    let farCommandSurface = this.refs.farCommandSurface;
    let commandBarRegion = this.refs.commandBarRegion;
    let searchSurface = this.refs.searchSurface;
    let renderedItems = [].concat(items);
    let renderedOverflowItems = overflowItems;
    let consumedWidth = 0;
    let isOverflowVisible = overflowItems && overflowItems.length;

    let style = window.getComputedStyle(commandSurface);
    let availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
    if (searchSurface) {
      availableWidth -= searchSurface.getBoundingClientRect().width;
    }
    if (farCommandSurface) {
      availableWidth -= farCommandSurface.getBoundingClientRect().width;
    }

    if (isOverflowVisible) {
      availableWidth -= this._overflowWidth;
    }

    for (let i = 0; i < renderedItems.length; i++) {
      let item = renderedItems[i];
      let itemWidth = this._commandItemWidths[item.key];

      if ((consumedWidth + itemWidth) >= availableWidth) {
        if (i > 0 && !isOverflowVisible && (availableWidth - consumedWidth) < OVERFLOW_WIDTH) {
          i--;
        }

        renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
        break;
      } else {
        consumedWidth += itemWidth;
      }

    }

    this.setState({
      renderedItems: renderedItems,
      renderedOverflowItems: renderedOverflowItems,
      expandedMenuItemKey: null,
      contextualMenuItems: null,
      contextualMenuTarget: null
    });
  }

  private _onItemClick(ev, item) {
    if (item.key === this.state.expandedMenuItemKey || !item.items || !item.items.length) {
      this._onContextMenuDismiss();
    } else {
      this.setState({
        expandedMenuId: ev.currentTarget.id,
        expandedMenuItemKey: item.key,
        contextualMenuItems: item.items,
        contextualMenuTarget: ev.currentTarget
      });
    }
    if (item.onClick) {
      item.onClick(ev, item);
    }
  }

  @autobind
  private _onOverflowClick(ev) {
    if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
      this._onContextMenuDismiss();
    } else {
      this.setState({
        expandedMenuId: ev.currentTarget.id,
        expandedMenuItemKey: OVERFLOW_KEY,
        contextualMenuItems: this.state.renderedOverflowItems,
        contextualMenuTarget: ev.currentTarget
      });
    }
  }

  @autobind
  private _onContextMenuDismiss(ev?: any) {
    if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget as HTMLElement)) {
      this.setState({
        expandedMenuItemKey: null,
        contextualMenuItems: null,
        contextualMenuTarget: null
      });
    } else {
      ev.stopPropagation();
      ev.preventDefault();
    }
  }

  private _getStateFromProps(nextProps: IRibbonProps) {
    return {
      renderedItems: nextProps.items || [],
      renderedOverflowItems: null,
      contextualMenuItems: null,
      renderedFarItems: nextProps.farItems || null
    };
  }
}
