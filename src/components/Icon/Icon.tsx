import * as React from 'react';
import * as classNames from 'classnames';
import { IIconProps } from './Icon.Props';
import { IconName } from './IconName';
import { getNativeAttributes, htmlElementAttributes } from '../../utilities/attributes';

//import './Icon.scss';

export const Icon: (props: IIconProps) => JSX.Element = (props: IIconProps) => {

    let size = props.size;
    let customIcon = props.iconName === IconName.None;
    let iconClass = IconName[props.iconName];
    let iconClassName = classNames(
        ['icon'], {
        [`icon-${iconClass}`]: !customIcon 
    }, [props.className]);

    return <i { ...getNativeAttributes(props, htmlElementAttributes) } className={ iconClassName } />;

};
