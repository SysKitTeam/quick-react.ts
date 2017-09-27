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

    public constructor(props: ITreeviewItemProps) {
        super(props);

        this.state = {
            isOpen: props.item.isOpen,
            iconArrow: this.getArrowIconFromState(props.item.isOpen),
            hover: false
        };
    }

    public render(): JSX.Element {
        let { item, onChange, showCheckbox, children, recursive, expandParentOnClick, onExpand } = this.props;
        let { isOpen } = this.state;
        let checkedStatus = this._getChildrenChecked(item, item.checked, recursive);
        let checked = checkedStatus.isChecked;

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
                        <Icon iconName={this.state.iconArrow} onClick={this._onItemClick.bind(this, item)}></Icon>
                    }
                    <div className={treeveiwItemClassName} >
                        {
                            showCheckbox &&
                            <Checkbox label={item.text} onChange={this._onItemSelect.bind(this, item, checked)} checked={checked} className={selectedClassName} />
                        }
                        {
                            !showCheckbox &&
                            <span onClick={this._onItemSelect.bind(this, item, true)}>{item.text}</span>
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
                                    expandParentOnClick={expandParentOnClick}
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

    @autobind
    private _onItemSelect(item: ITreeviewItem, checked, ev: React.FormEvent<HTMLElement>): void {
        if (item.children.length > 0 && this.props.expandParentOnClick) {
            this.changeState(item.id);
            return;
        }

        if (this.props.showCheckbox) {
            let items = [];
            items.push(item.id);
            if (this.props.recursive) {
                items = items.concat(this._getChildrenId(this.props.children));
            }
            this.props.onChange(ev, items, !checked);
        } else {
            this.props.onChange(ev, [item.id], checked);
        }
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
    private _onItemClick(ev: any, itemId: string) {
        this.changeState(itemId);
        ev.stopPropagation();
        ev.preventDefault();
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

    private changeState(itemId: string) {
        let { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen,
            iconArrow: this.getArrowIconFromState(!isOpen)
        });
        this.props.onExpand(itemId, !isOpen);
    }
}
