import * as React from 'react';
import { CheckStatus } from './TreeFilter.Props';
import { Icon } from '../Icon';
export interface ITreeFilterCheckBoxProps {
    itemId: string;
    checked: CheckStatus;
    text: string;
    onChange: () => void;
}
export class TreeFilterCheckBox extends React.PureComponent<ITreeFilterCheckBoxProps, void> {
    render() {
        const { itemId, checked, onChange, text } = this.props;
        const isChecked = checked === CheckStatus.Checked;
        const iconName = isChecked ? 'icon-checkmark' : 'icon-folder';
        return (
            <div className="checkbox" onClick={onChange} >
                <input
                    {...isChecked}
                    className={'checkbox-input'}
                    type="checkbox"
                />
                {checked !== CheckStatus.NotChecked &&
                    <Icon className={'custom-checkbox-checkmark'} iconName={iconName} />
                }
                <label className={'checkbox-label'}>
                    <span className={'label'}>{text}</span>
                </label>
            </div>
        );
    }
}
