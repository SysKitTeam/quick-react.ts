import * as React from 'react';
import * as classNames from 'classnames';
import { ITreeviewItemProps, ITreeviewItem } from './TreeviewItem.Props';
import { Icon } from '../../components/Icon/Icon';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { CommonComponent } from '../Common/Common';
import { autobind } from '../../utilities/autobind';
import './Treeview.scss';

export class TreeviewItem extends CommonComponent<ITreeviewItemProps, any> {
    public static defaultProps: ITreeviewItem = {
        isOpen: false
    };

    constructor (props) {
        super(props);

        this.state = { isOpen: props.isOpen, iconArrow: 'icon-ArrowRight' };
    }

    public render(): JSX.Element {
        let { item, onChange } = this.props;
        let { isOpen } = this.state;

        const itemClassName = classNames(
            'treeview-child',
            {
                'expanded': this.state.isOpen,
                'collapsed': !this.state.isOpen
            }
        ); 

        return (
            <div>
                <div className={'treeview-item'} onClick={ this._onItemClick.bind(this) }>
                    <Icon iconName={this.state.iconArrow}></Icon>
                    {item.text}
                </div>
                <div className={itemClassName}>
                    { item.children && item.children.map((child, index) => (
                        <div key={index}>
                            <Checkbox checked={child.checked !== undefined ? child.checked : false} label={child.text} onChange={onChange} itemId={child.id}></Checkbox>
                        </div>           
                    ))}
                </div>
            </div>  
        );
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
