import * as React from 'react';
import * as classNames from 'classnames';
import { getNativeAttributes, divAttributes } from '../../utilities/attributes';
import { ILabelProps } from './Label.Props';
import { Icon } from '../Icon/Icon';
import './Label.scss';

export class Label extends React.PureComponent<ILabelProps, {}> {
    render() {
        let { disabled, required, children, icon, iconClassName } = this.props;

        const className = classNames(
            'label',
            [this.props.className],
            {
                'label-disabled': disabled,
                'label-required': required
            }
        );

        return (
            <label
                { ...getNativeAttributes(this.props, divAttributes) } className={className}>
                {icon &&
                    <Icon iconName={icon} className={iconClassName}></Icon>
                }
                {children}
            </label>
        );
    }
}
