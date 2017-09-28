import * as React from 'react';
import * as classNames from 'classnames';
import { ITreeviewItemProps, ITreeviewItem, MapChildren } from './TreeviewItem.Props';
import { Icon } from '../../components/Icon/Icon';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { CommonComponent } from '../Common/Common';
import { autobind } from '../../utilities/autobind';
import { Treeview } from './Treeview';
import './Treeview.scss';

export class TreeviewItem extends CommonComponent<ITreeviewItemProps, any> {
    public static defaultProps: ITreeviewItem = {
        isOpen: false
    };

    private readonly expandedIcon: string = 'icon-arrow_down_right';
    private readonly collapsedIcon: string = 'icon-arrow_right';

    private readonly onExpand: (itemId?: string, expanded?: boolean) => void;
    private readonly getIsOpen;
    private _executeSingleClickEvent: boolean = false;
    private _timer = null;

    public constructor(props: ITreeviewItemProps) {
        super(props);

        this.state = {
            hover: false,
            isOpen: props.onExpand !== undefined ? undefined : props.item.isOpen
        };

        this.onExpand = props.onExpand !== undefined ? props.onExpand : () => {
            let { isOpen } = this.state;
            this.setState({
                isOpen: !isOpen
            });
        };

        this.getIsOpen = props.onExpand !== undefined ?
            () => this.props.item.isOpen !== undefined ? this.props.item.isOpen : false :
            () => this.state.isOpen;
    }

    public render(): JSX.Element {
        let { item, onChange, showCheckbox, children, recursive, expandOnClick, onExpand } = this.props;
        let checkedStatus = this._getChildrenChecked(item, item.checked, recursive);
        let checked = checkedStatus.isChecked;

        const isOpen = this.getIsOpen();
        const arrowIcon = this.getArrowIconFromState(isOpen);

        const itemClassName = classNames(
            {
                'expanded': isOpen,
                'collapsed': !isOpen
            }
        );

        const parentItemClassName = classNames(
            {
                'treeveiw-parent-item': item.children.length > 0
            }
        );

        const treeveiwItemClassName = classNames(
            'treeveiw-content'
        );

        const selectedClassName = classNames(
            {
                'partial-selected': recursive && checkedStatus.hasCheckedChild && !checked
            }
        );

        return (
            <div onMouseEnter={this._onItemHover} onMouseLeave={this._onItemLeaveHover} className={parentItemClassName}>
                <div className={classNames('treeview-item', item.className)}>
                    {
                        item.children.length > 0 &&
                        <Icon iconName={arrowIcon} onClick={(ev) => this._onExpand(ev, item)}></Icon>
                    }
                    <div className={treeveiwItemClassName} >
                        {
                            showCheckbox &&
                            <Checkbox
                                label={item.text}
                                onChange={(event) => this._onItemSelect(item, checked, event)}
                                checked={checked}
                                className={selectedClassName}
                            />
                        }
                        {
                            !showCheckbox &&
                            <span
                                onClick={(event) => this._onItemSelect(item, true, event)}
                                onDoubleClick={(ev) => this._onExpand(ev, item)}
                            >
                                {item.text}
                            </span>
                        }
                        {
                            this.props.item.hoverOverBtn && this.state.hover &&
                            <div className="treeview-item__icons-container">
                                {
                                    this.props.item.hoverOverBtn.map((btn, key) => (
                                        <div key={key} className="treeview-item__icon">
                                            <Icon iconName={btn.iconName} onClick={btn.callback.bind(this.props.item.id)}></Icon>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        }
                    </div>
                </div>
                {
                    item.children.length > 0 && isOpen &&
                    <div className={itemClassName}>
                        {
                            item.children.map((child, index) =>
                                <TreeviewItem
                                    item={child}
                                    onChange={onChange}
                                    key={index}
                                    showCheckbox={showCheckbox}
                                    children={child.children}
                                    recursive={recursive}
                                    className={child.className}
                                    expandOnClick={expandOnClick}
                                    onExpand={onExpand}
                                />
                            )
                        }
                    </div>
                }
            </div>
        );
    }

    @autobind
    private _onItemHover() {
        this.setState({
            hover: true
        });
    }

    @autobind
    private _onItemLeaveHover() {
        this.setState({
            hover: false
        });
    }

    private _timerElapsed(item: ITreeviewItem, checked: boolean, event: React.MouseEvent<HTMLSpanElement>) {
        this._executeSingleClickEvent = true;
        this._timer = null;
        this._onItemSelect(item, checked, event);
    }

    @autobind
    private _onItemSelect(item: ITreeviewItem, checked: boolean, event: any): void {
        if (this._executeSingleClickEvent) {
            if (this.props.showCheckbox) {
                let items = [];
                items.push(item.id);
                if (this.props.recursive) {
                    items = items.concat(this._getChildrenId(this.props.children));
                }
                this.props.onChange(event, items, !checked);
            } else {
                this.props.onChange(event, [item.id], checked);
            }
        }

        if (this._timer === null && !this._executeSingleClickEvent) {
            this._timer = setTimeout(() => this._timerElapsed(item, checked, event), 200);
        }
    }

    private _onExpand(ev: any, item: ITreeviewItem) {
        if (this._timer !== null) {
            clearTimeout(this._timer);
            this._timer = null;
            this._executeSingleClickEvent = false;
        }

        ev.stopPropagation();
        ev.preventDefault();

        this.onExpand(item.id, !item.isOpen);
    }

    @autobind
    private _getChildrenId(children) {
        let result = [];
        children.forEach((item) => {
            result.push(item.id);
            if (item.children.length > 0) {
                result = result.concat(this._getChildrenId(item.children));
            }
        });
        return result;
    }

    @autobind
    private _getChildrenChecked(item: ITreeviewItem, checked: boolean, recursive: boolean) {
        let result = { isChecked: true, hasCheckedChild: false };
        if (item.children.length === 0 || !recursive) {
            result.isChecked = checked === undefined ? false : checked;
        } else {
            item.children.forEach((element) => {
                if (element.checked) {
                    result.hasCheckedChild = true;
                }
                let childStatus = this._getChildrenChecked(element, element.checked, recursive);
                result.isChecked = result.isChecked && childStatus.isChecked;
                if (childStatus.hasCheckedChild) {
                    result.hasCheckedChild = true;
                }
            });
        }
        return result;
    }

    private getArrowIconFromState = (isOpen: boolean) => isOpen ? this.expandedIcon : this.collapsedIcon;
}
