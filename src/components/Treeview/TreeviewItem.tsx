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
        this.state = { isOpen: props.isOpen, iconArrow: 'icon-ArrowRight' };
    }

    public shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.item === nextProps.item
            && this.state.isOpen === nextState.isOpen
            && this.state.iconArrow === nextState.iconArrow
            && this.state.selected === nextState.selected
            && this.props.children === nextProps.children
        );
    }

    public render(): JSX.Element {
        let { item, onChange, showCheckbox, children, recursive } = this.props;
        let { isOpen } = this.state;
        let checked: boolean;
        if (recursive && children.length === 0) {
            checked = item.checked;
        } else if (recursive) {
            checked = this._getChildrenChecked(item);
        }
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

            }
        );

        return (
            <div className={parentItemClassName}>
                <div className={'treeview-item'}>
                    {item.children.length > 0 &&
                        <Icon iconName={this.state.iconArrow} onClick={this._onItemClick.bind(this)}></Icon>
                    }
                    <div className={treeveiwItemClassName} >
                        {showCheckbox &&
                            <Checkbox label={item.text} onChange={this._onItemSelect.bind(this, item, checked)} checked={checked} />
                        }
                        {!showCheckbox &&
                            <span onClick={this._onItemSelect.bind(this, item, true)}>{item.text}</span>
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
            iconArrow: isOpen ? 'icon-ArrowRight' : 'icon-ArrowDownRight'
        });

        ev.stopPropagation();
        ev.preventDefault();
    }

    @autobind
    private _getChildrenChecked(item: ITreeviewItem): boolean {
        let result = true;
        item.children.forEach((element) => {
            if (result) {
                result = result && element.checked;
                if (result && element.children.length > 0) {
                    result = result && this._getChildrenChecked(element);
                }
            }
        });
        return result;
    }
}
