import * as React from 'react';
import { CheckStatus } from './TreeFilter.Props';
import { Icon } from '../Icon';
import * as classNames from 'classnames';

import './VirtualizedTreeViewCheckBox.scss';

export interface IVirtualizedTreeViewCheckBoxProps {
    itemId: string;
    checked: CheckStatus;
    text: string;
    onChange: () => void;
}

export class VirtualizedTreeViewCheckBox extends React.PureComponent<IVirtualizedTreeViewCheckBoxProps, {}> {
    render() {
        const { itemId, checked, onChange, text } = this.props;
        const isChecked = checked === CheckStatus.Checked;

        const className = classNames(
            'TreeFilter-checkbox',
            {
                'partial-selected': checked === CheckStatus.ChildChecked
            }
        );

        return (
            <div className={className} onClick={onChange} >
                <input {...isChecked} className={'checkbox-input'} type="checkbox" />
                {isChecked && <Icon className={'TreeFilter-checkbox-checkmark'} iconName={'icon-checkmark'} />}
                <label className="TreeFilter-checkbox-label"  >
                    <span className={'label'}>{text}</span>
                </label>
            </div>
        );
    }
}
