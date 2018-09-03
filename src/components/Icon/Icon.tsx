import * as React from 'react';
import * as classNames from 'classnames';
import { IIconProps, IconSize, DefaultIconNumberStyleObject, NotificationBubbleStyleObject} from './Icon.Props';
import { getNativeAttributes, htmlElementAttributes } from '../../utilities/attributes';
import * as lodash from 'lodash';

import './Icon.scss';
import { defaultProps } from '../Wizard';

export const Icon: (props: IIconProps) => JSX.Element = (props: IIconProps) => {
    const customIcon = props.iconName === '';
    const svgIcon = props.iconName && props.iconName.startsWith('svg');
    let iconPrefix = 'icon '.concat(svgIcon ? 'svg' : 'font');
    let iconClassName = classNames(
        [iconPrefix], {
            [props.iconName]: !customIcon
        }, [props.className]);

    let iconHeight: any;
    let iconWidth: any;

    switch (props.iconSize) {
        case IconSize.smallest:
            iconHeight = '16px';
            iconWidth = '16px';
            break;
        case IconSize.small:
            iconHeight = '24px';
            iconWidth = '24px';
            break;
        case IconSize.medium:
            iconHeight = '32px';
            iconWidth = '32px';
            break;
        case IconSize.large:
            iconHeight = '64px';
            iconWidth = '64px';
            break;
        default:
        iconHeight = props.height || '16px';
        iconWidth = props.width || '16px';
    }

    const numberString = props.notificationNumber === undefined ? '' : props.notificationNumber < 10 ?
                            props.notificationNumber.toLocaleString() : '9+';
    const defaultStyleObject = DefaultIconNumberStyleObject(props.iconSize, numberString.length);
    let styleObject: NotificationBubbleStyleObject = {numberStyleObject: {}, containerStyleObject: {}, bubbleStyleObject: {}};

    if (props.notificationBubbleStyleObject) {

        if (props.notificationBubbleStyleObject.containerStyleObject) {
            styleObject.containerStyleObject.width = props.notificationBubbleStyleObject.containerStyleObject.width ||
                defaultStyleObject.containerStyleObject.width;
            styleObject.containerStyleObject.height = props.notificationBubbleStyleObject.containerStyleObject.height ||
                defaultStyleObject.containerStyleObject.height;
            styleObject.containerStyleObject.position = props.notificationBubbleStyleObject.containerStyleObject.position ||
                defaultStyleObject.containerStyleObject.position;
            styleObject.containerStyleObject.display = props.notificationBubbleStyleObject.containerStyleObject.display ||
                defaultStyleObject.containerStyleObject.display;
        } else {
            styleObject.containerStyleObject = defaultStyleObject.containerStyleObject;
        }

        if (props.notificationBubbleStyleObject.bubbleStyleObject) {
            styleObject.bubbleStyleObject.position = props.notificationBubbleStyleObject.bubbleStyleObject.position ||
                defaultStyleObject.bubbleStyleObject.position;   
            styleObject.bubbleStyleObject.top = props.notificationBubbleStyleObject.bubbleStyleObject.top ||
                defaultStyleObject.bubbleStyleObject.top;
            styleObject.bubbleStyleObject.right = props.notificationBubbleStyleObject.bubbleStyleObject.right ||
                defaultStyleObject.bubbleStyleObject.right;
            styleObject.bubbleStyleObject.width = props.notificationBubbleStyleObject.bubbleStyleObject.width ||
                defaultStyleObject.bubbleStyleObject.width;
            styleObject.bubbleStyleObject.height = props.notificationBubbleStyleObject.bubbleStyleObject.height ||
                defaultStyleObject.bubbleStyleObject.height;         
            styleObject.bubbleStyleObject.borderRadius = props.notificationBubbleStyleObject.bubbleStyleObject.borderRadius ||
                defaultStyleObject.bubbleStyleObject.borderRadius;
            styleObject.bubbleStyleObject.backgroundColor = props.notificationBubbleStyleObject.bubbleStyleObject.backgroundColor ||
                defaultStyleObject.bubbleStyleObject.backgroundColor;
        } else {
            styleObject.bubbleStyleObject = defaultStyleObject.bubbleStyleObject;
        }

        if (props.notificationBubbleStyleObject.numberStyleObject) {
            styleObject.numberStyleObject.lineHeight = props.notificationBubbleStyleObject.numberStyleObject.lineHeight ||
                defaultStyleObject.numberStyleObject.lineHeight;
            styleObject.numberStyleObject.fontWeight = props.notificationBubbleStyleObject.numberStyleObject.fontWeight ||
                defaultStyleObject.numberStyleObject.fontWeight;
            styleObject.numberStyleObject.fontSize = props.notificationBubbleStyleObject.numberStyleObject.fontSize ||
                defaultStyleObject.numberStyleObject.fontSize;
            styleObject.numberStyleObject.marginLeft = props.notificationBubbleStyleObject.numberStyleObject.marginLeft ||
                defaultStyleObject.numberStyleObject.marginLeft;
            styleObject.numberStyleObject.marginRight = props.notificationBubbleStyleObject.numberStyleObject.marginRight ||
                defaultStyleObject.numberStyleObject.marginRight;
            styleObject.numberStyleObject.color = props.notificationBubbleStyleObject.numberStyleObject.color ||
                defaultStyleObject.numberStyleObject.color;
        } else {
            styleObject.numberStyleObject = defaultStyleObject.numberStyleObject;
        }

    } else {
        styleObject = defaultStyleObject;
    }

    if (svgIcon) {
        const spaceIdx = props.iconName.indexOf(' ');
        let iconName = props.iconName;
        if (spaceIdx !== -1) {
            iconName = props.iconName.substr(0, spaceIdx);
        }

        if (!props.notificationNumber) {
            return (
            <svg { ...getNativeAttributes(props, htmlElementAttributes) } className={iconClassName} width={iconWidth} height={iconHeight}>
                <use xlinkHref={'#symbol-defs_' + iconName} />
            </svg>
            );
        } else {
            return (
            <div style={styleObject.containerStyleObject as React.CSSProperties} className={props.containerClassName}>
                <svg { ...getNativeAttributes(props, htmlElementAttributes) } className={iconClassName} width={iconWidth} height={iconHeight}>
                    <use xlinkHref={'#symbol-defs_' + iconName} />
                </svg>
                <div style={styleObject.bubbleStyleObject as React.CSSProperties} className={props.notificationBubbleClassName}>
                    <div style={styleObject.numberStyleObject as React.CSSProperties} className={props.notificationNumberClassName}>
                        {numberString}
                    </div>
                </div>
            </div>
            ); }
    } else {
        if (!props.notificationNumber) {
        return (
                <i { ...getNativeAttributes(props, htmlElementAttributes) } className={iconClassName} />
            );
        } else {
            return (
            <div style={styleObject.containerStyleObject as React.CSSProperties} className={props.containerClassName}>
                <i { ...getNativeAttributes(props, htmlElementAttributes) } className={iconClassName} />
                <div style={styleObject.bubbleStyleObject as React.CSSProperties} className={props.notificationBubbleClassName}>
                    <div style={styleObject.numberStyleObject as React.CSSProperties} className={props.notificationNumberClassName}>
                        {numberString}
                    </div>
                </div>
            </div>);
        }
    }
};
