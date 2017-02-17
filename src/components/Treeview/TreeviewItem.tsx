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

    constructor (props) {
        super(props);
        this.state = { isOpen: props.isOpen, iconArrow: 'icon-ArrowRight' };
    }

     public shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.item === nextProps.item
            && this.props.children === nextProps.children
            // && this.props.onChange === nextProps.onChange
            && this.state.isOpen === nextState.isOpen
            && this.state.iconArrow === nextState.iconArrow
            );
    }

    public render(): JSX.Element {
        let { item, onChange, children, showCheckbox } = this.props;
        let { isOpen } = this.state;
        const itemClassName = classNames(
            {
                'expanded': this.state.isOpen,
                'collapsed': !this.state.isOpen
            }
        ); 
        const parentItemClassName = classNames(
            {
                'treeveiw-parent-item' : children[item.id].length > 0
            }
        );

        return (
            <div className={parentItemClassName}>
                <div className={'treeview-item'}>
                    {children[item.id].length > 0 &&
                        <Icon iconName={this.state.iconArrow} onClick={ this._onItemClick.bind(this) }></Icon>
                    }
                    <div className={'treeveiw-content'} >
                        {showCheckbox &&
                            <Checkbox label={item.text} onChange={this._onItemSelect.bind(this, item)} checked={item.checked !== undefined ? item.checked : false}/>
                        }
                        {!showCheckbox &&
                            <span onClick={this._onItemSelect.bind(this, item)}>{item.text}</span>
                        }
                    </div>
                </div>
                <div className={itemClassName}>
                    {children[item.id].length > 0 && 
                        children[item.id].map((child, index) => (
                            <TreeviewItem item={child} onChange={onChange} children={children} key = {index} showCheckbox={showCheckbox}/>
                        ))
                    }
                </div>
            </div>  
        );
    }

    @autobind
    private _onItemSelect(item, ev: React.FormEvent<HTMLElement>): void {
        if (this.props.showCheckbox) {
            this.props.onChange(ev, item.id, !item.checked);
        } else {
            this.props.onChange(ev, item.id, true);
        }
    }

    @autobind
    private _onItemClick(ev: MouseEvent ) {
        let { isOpen } = this.state;

        this.setState({ 
            isOpen: !isOpen,
            iconArrow: isOpen ? 'icon-ArrowRight' : 'icon-ArrowDownRight'
        });

        ev.stopPropagation();
        ev.preventDefault();
    }
}
