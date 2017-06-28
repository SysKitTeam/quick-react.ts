import * as React from 'react';
import { CheckStatus } from './TreeFilter.Props';
import { Icon } from '../Icon';
export interface ITreeFilterCheckBoxProps {
    itemId: string;
    checked: CheckStatus;
    text: string;
    onChange: () => void;
}
export class TreeFilterCheckBox extends React.PureComponent<ITreeFilterCheckBoxProps, any> {
    render() {
        const { itemId, checked, onChange, text } = this.props;
        const isChecked = checked === CheckStatus.Checked;
        const iconName = isChecked ? 'icon-checkmark' : 'icon-folder';
        return (
            <div className="TreeFilter-checkbox" onClick={onChange} >
                <input
                    {...isChecked}
                    className={'checkbox-input'}
                    type="checkbox"
                />
                {checked !== CheckStatus.NotChecked &&
                    <Icon className={'TreeFilter-checkbox-checkmark'} iconName={iconName} />
                }
                <label className={'TreeFilter-checkbox-label'}>
                    <span className={'label'}>{text}</span>
                </label>
            </div>
        );
    }
}
