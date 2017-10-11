import * as React from 'react';
import * as classNames from 'classnames';
import { ICheckboxListProps } from './CheckboxList.Props';
import { CheckboxListItem } from './CheckboxListItem';
import { Icon } from '../../components/Icon/Icon';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Label } from '../../components/Label/Label';
import { autobind } from '../../utilities/autobind';
import { CommonComponent } from '../Common/Common';
import './CheckboxList.scss';

export class CheckboxList extends CommonComponent<ICheckboxListProps, {}> {
    public shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.items === nextProps.items
            && this.props.className === nextProps.className
            && this.props.title === nextProps.title
        );
    }

    public render(): JSX.Element {
        let { title, items, onCheckboxChanged } = this.props;

        const className = classNames(
            'checkboxlist',
            [this.props.className]);

        return (
            <div className={className}>
                {title &&
                    <div className="label checkbox-list-label">{title}</div>
                }
                {items.map((item, index) => (
                    <CheckboxListItem key={index} item={item} onChange={onCheckboxChanged} />
                ))}
            </div>
        );
    }
}
