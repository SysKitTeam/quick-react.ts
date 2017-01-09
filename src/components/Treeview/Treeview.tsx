import * as React from 'react';
import * as classNames from 'classnames';
import { ITreeviewProps } from './Treeview.Props';
import { TreeviewItem } from './TreeviewItem';
import { Icon } from '../../components/Icon/Icon';
import { IconName } from '../../components/Icon/IconName';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { autobind } from '../../utilities/autobind';
import { CommonComponent } from '../Common/Common';
import './Treeview.scss';

export class Treeview extends CommonComponent<ITreeviewProps, any> {
    constructor (props) {
        super(props);
    }

    public render(): JSX.Element {
        let { label, items } = this.props;

        const className = classNames(
            'treeview',
            [this.props.className]);

        return (
            <div className={className}>
                { items.map((item, index) => (
                    <TreeviewItem key={index} item={item}/>
                ))}
            </div>          
        );
    }
}
