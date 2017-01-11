import * as React from 'react';
import * as classNames from 'classnames';
import { IIconProps } from './Icon.Props';
import { getNativeAttributes, htmlElementAttributes } from '../../utilities/attributes';

//import './Icon.scss';

export const Icon: (props: IIconProps) => JSX.Element = (props: IIconProps) => {

    let size = props.size;
    let customIcon = props.iconName === '';
    let iconClass = props.iconName;
    let iconClassName = classNames(
        ['icon'], {
        [props.iconName]: !customIcon 
    }, [props.className]);

    return <i { ...getNativeAttributes(props, htmlElementAttributes) } className={ iconClassName } />;

};
