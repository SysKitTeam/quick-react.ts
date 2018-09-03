import * as React from 'react';
import * as classNames from 'classnames';
import { INotificationIconProps, DefaultIconNumberStyleObject, NotificationBubbleStyleObject} from './NotificationIcon.Props';
import { IconSize } from '../Icon/Icon.Props';
import { getNativeAttributes, htmlElementAttributes } from '../../utilities/attributes';

export const NotificationIcon: (props: INotificationIconProps) => JSX.Element = (props: INotificationIconProps) => {
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

    const numberString = props.notificationNumber === undefined || props.notificationNumber === 0 ? '' 
                            : props.notificationNumber < 10 ? props.notificationNumber.toLocaleString() : '9+';
    const defaultStyleObject = DefaultIconNumberStyleObject(props.iconSize, numberString.length);
   
    let styleObject: NotificationBubbleStyleObject = { ...defaultStyleObject};

    if (props.notificationBubbleStyleObject) {
        if (props.notificationBubbleStyleObject.containerStyleObject) {
            Object.assign(styleObject.containerStyleObject, props.notificationBubbleStyleObject.containerStyleObject);
        }
        if (props.notificationBubbleStyleObject.bubbleStyleObject) {
            Object.assign(styleObject.bubbleStyleObject, props.notificationBubbleStyleObject.bubbleStyleObject);
        }
        if (props.notificationBubbleStyleObject.numberStyleObject) {
            Object.assign(styleObject.numberStyleObject, props.notificationBubbleStyleObject.numberStyleObject);
        }
    }

    if (svgIcon) {
        const spaceIdx = props.iconName.indexOf(' ');
        let iconName = props.iconName;
        if (spaceIdx !== -1) {
            iconName = props.iconName.substr(0, spaceIdx);
        }
            return (
            <div style={styleObject.containerStyleObject as React.CSSProperties} className={props.containerClassName}>
                <svg { ...getNativeAttributes(props, htmlElementAttributes) } className={iconClassName} width={iconWidth} height={iconHeight}>
                    <use xlinkHref={'#symbol-defs_' + iconName} />
                </svg>
                {(numberString !== '') &&
                    <div style={styleObject.bubbleStyleObject as React.CSSProperties} className={props.notificationBubbleClassName}>
                        <div style={styleObject.numberStyleObject as React.CSSProperties} className={props.notificationNumberClassName}>
                            {numberString}
                        </div>
                    </div>
                }
            </div>
            );
    } else {
            return (
            <div style={styleObject.containerStyleObject as React.CSSProperties} className={props.containerClassName}>
                <i { ...getNativeAttributes(props, htmlElementAttributes) } className={iconClassName} />
                {(numberString !== '') && 
                    <div style={styleObject.bubbleStyleObject as React.CSSProperties} className={props.notificationBubbleClassName}>
                        <div style={styleObject.numberStyleObject as React.CSSProperties} className={props.notificationNumberClassName}>
                            {numberString}
                        </div>
                    </div>
                }
            </div>);
    }
};
