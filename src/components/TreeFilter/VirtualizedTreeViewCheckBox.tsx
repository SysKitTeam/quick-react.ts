import * as React from 'react';
import { CheckStatus } from './TreeFilter.Props';
import { Icon } from '../Icon';
import * as classNames from 'classnames';

import './VirtualizedTreeViewCheckBox.scss';
import { DirectionalHint, autobind } from '../../index';
import { Tooltip } from '../Tooltip/Tooltip';

export interface IVirtualizedTreeViewCheckBoxProps {
    itemId: string;
    checked: CheckStatus;
    text: string;
    className?: string;
    iconName?: string;
    iconClassName?: string;
    hasUniqueRoleAssignments?: boolean;
    onMouseOver?(): void;
    onMouseOut?(): void;
    onChange?(): void;
}

export class VirtualizedTreeViewCheckBox extends React.PureComponent<IVirtualizedTreeViewCheckBoxProps, {}> {

    render() {
        const { itemId, checked, onChange, text, iconName, iconClassName, hasUniqueRoleAssignments } = this.props;
        const isChecked = checked === CheckStatus.Checked;

        const virtualizedTreeClassName = classNames(
            'virtualized-tree-filter-checkbox',
            [this.props.className],
            {
                'partial-selected': checked === CheckStatus.ChildChecked
            }
        );

        return (
            <div className={virtualizedTreeClassName} onClick={onChange} >
                <input {...isChecked} className={'checkbox-input'} type="checkbox" />
                {isChecked && <Icon className={'virtualized-tree-filter-checkbox-checkmark'} iconName={'icon-checkmark'} />}
                <label className={classNames('virtualized-tree-filter-checkbox-label', { 'is-checked': isChecked })} >
                    <span className={'label'} title={text}>
                        {iconName && <Icon iconName={iconName} className={iconClassName} />}
                        {hasUniqueRoleAssignments &&
                            <span
                                className="break-permissions"
                            >
                                <Icon iconName="icon-add" className="break-permissions-icon" />
                                <Tooltip
                                    className="tooltip-white"
                                    content="Unique permissions"
                                    directionalHint={DirectionalHint.rightCenter}
                                />
                            </span>
                        }
                        {text}
                    </span>
                </label>
            </div>
        );
    }
}
