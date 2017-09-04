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

    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen,
            iconArrow: 'icon-arrow_right',
            hover: false
        };
    }


    public render(): JSX.Element {
        let { item, onChange, showCheckbox, children, recursive } = this.props;
        let { isOpen } = this.state;
        let checkedStatus = this._getChildrenChecked(item, item.checked, recursive);
        let checked = checkedStatus.isChecked;
        const itemClassName = classNames(
            {
                'expanded': this.state.isOpen,
                'collapsed': !this.state.isOpen
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
                <div className={'treeview-item'}>
                    {item.children.length > 0 &&
                        <Icon iconName={this.state.iconArrow} onClick={this._onItemClick.bind(this)}></Icon>
                    }
                    <div className={treeveiwItemClassName} >
                        {showCheckbox &&
                            <Checkbox label={item.text} onChange={this._onItemSelect.bind(this, item, checked)} checked={checked} className={selectedClassName} />
                        }
                        {!showCheckbox &&
                            <span onClick={this._onItemSelect.bind(this, item, true)}>{item.text}</span>
                        }
                        {this.props.item.hoverOverBtn && this.state.hover &&
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
                <div className={itemClassName}>
                    {item.children.length > 0 &&
                        item.children.map((child, index) => (
                            <TreeviewItem item={child} onChange={onChange} key={index} showCheckbox={showCheckbox} children={child.children} recursive={recursive} />
                        ))
                    }
                </div>
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
    private _onItemSelect(item, checked, ev: React.FormEvent<HTMLElement>): void {
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
    private _onItemClick(ev: MouseEvent) {
        let { isOpen } = this.state;

        this.setState({
            isOpen: !isOpen,
            iconArrow: isOpen ? 'icon-arrow_right' : 'icon-arrow_down_right'
        });

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
}
