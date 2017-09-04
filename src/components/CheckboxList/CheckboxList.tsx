import * as React from 'react';
import * as classNames from 'classnames';
import { ICheckboxListProps } from './CheckboxList.Props';
import { CheckboxListItem } from './CheckboxListItem';
import { Icon } from '../../components/Icon/Icon';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { autobind } from '../../utilities/autobind';
import { CommonComponent } from '../Common/Common';
import './CheckboxList.scss';

export class CheckboxList extends CommonComponent<ICheckboxListProps, {}> { 
    public shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.items === nextProps.items
            && this.props.className === nextProps.className
            && this.props.label === nextProps.label
        );
    }

    public render(): JSX.Element {
        let { label, items, onCheckboxChanged } = this.props;
        
        const className = classNames(
            'checkboxlist',
            [this.props.className]);

        return (
            <div className={className}>
                {items.map((item, index) => (
                    <CheckboxListItem key={index} item={item} onChange={onCheckboxChanged} />
                ))}
            </div>
        );
    }
}
