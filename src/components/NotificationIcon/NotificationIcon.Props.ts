import * as React from 'react';
import {IconSize} from '../Icon/Icon.Props';

export interface INotificationIconProps extends React.HTMLProps<HTMLElement> {
  iconName?: string;
  className?: string;
  iconSize?: IconSize;
  width?: any;
  height?: any;
  containerClassName?: string;
  notificationNumber?: number;
  notificationBubbleStyleObject?: NotificationBubbleStyleObject;
  notificationBubbleClassName?: string;
  notificationNumberClassName?: string;
}

export interface NotificationBubbleStyleObject {
  containerStyleObject?: ContainerStyleObject;
  bubbleStyleObject?: BubbleStyleObject;
  numberStyleObject?: NumberStyleObject;
}

export interface ContainerStyleObject {
  width?: string;
  height?: string;
  position?: string;
  display?: string;
  alignItems?: string;
}

export interface BubbleStyleObject {
  position?: string;
  top?: string;
  right?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export interface NumberStyleObject {
  lineHeight?: string;
  fontWeight?: string;
  fontSize?: string;
  marginLeft?: string;
  marginRight?: string;
  color?: string;
}

export const DefaultIconNumberStyleObject = (iconSize: IconSize, numberOfCharacters: number) => {
  let styleObject : NotificationBubbleStyleObject = { 
  containerStyleObject: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'flex-end'},
  bubbleStyleObject: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    borderRadius: '50%',
    backgroundColor: '#FB6464'
  },
  numberStyleObject: {
    fontWeight: 'bold',
    marginRight: '3px',
    color: 'white'}
  };
   
    switch (iconSize) {
    case IconSize.smallest:
        styleObject.containerStyleObject.width = '23px';
        styleObject.containerStyleObject.height = '23px';
        styleObject.bubbleStyleObject.height = '14px';
        styleObject.bubbleStyleObject.width = '14px';
        styleObject.numberStyleObject.fontSize = '10px';
        styleObject.numberStyleObject.lineHeight = '14px';
        styleObject.numberStyleObject.marginLeft = '4px';
        break;
    case IconSize.small:
        styleObject.containerStyleObject.width = '32px';
        styleObject.containerStyleObject.height = '32px';
        styleObject.bubbleStyleObject.height = '16px';
        styleObject.bubbleStyleObject.width = '16px';
        styleObject.numberStyleObject.fontSize = '12px';
        styleObject.numberStyleObject.lineHeight = '16px';
        styleObject.numberStyleObject.marginLeft = '4px';
        break;
    case IconSize.medium:
        styleObject.containerStyleObject.width = '41px';
        styleObject.containerStyleObject.height = '41px';
        styleObject.bubbleStyleObject.height = '18px';
        styleObject.bubbleStyleObject.width = '18px';
        styleObject.numberStyleObject.fontSize = '14px';
        styleObject.numberStyleObject.lineHeight = '18px';
        styleObject.numberStyleObject.marginLeft = '5px';
        break;
    case IconSize.large:
        styleObject.containerStyleObject.width = '75px';
        styleObject.containerStyleObject.height = '75px';
        styleObject.bubbleStyleObject.height = '22px';
        styleObject.bubbleStyleObject.width = '22px';
        styleObject.numberStyleObject.fontSize = '18px';
        styleObject.numberStyleObject.lineHeight = '22px';
        styleObject.numberStyleObject.marginLeft = '6px';
        break;
    default:
    styleObject.containerStyleObject.width = '23px';
    styleObject.containerStyleObject.height = '23px';
    styleObject.bubbleStyleObject.height = '14px';
    styleObject.bubbleStyleObject.width = '14px';
    styleObject.numberStyleObject.fontSize = '10px';
    styleObject.numberStyleObject.lineHeight = '14px';
    styleObject.numberStyleObject.marginLeft = '4px';
}


  if (numberOfCharacters === 2) {
    styleObject.bubbleStyleObject.borderRadius = '40px';
      switch (iconSize) {
      case IconSize.smallest:
          styleObject.containerStyleObject.width = '26px';
          styleObject.bubbleStyleObject.width = '20px';
          break;
      case IconSize.small:
          styleObject.containerStyleObject.width = '35px';
          styleObject.bubbleStyleObject.width = '22px';
          break;
      case IconSize.medium:
          styleObject.containerStyleObject.width = '44.5px';
          styleObject.bubbleStyleObject.width = '25px';          
          break;
      case IconSize.large:
          styleObject.containerStyleObject.width = '80px';
          styleObject.bubbleStyleObject.width = '32px';
          break;
      default:
      styleObject.containerStyleObject.width = '26px';
      styleObject.bubbleStyleObject.width = '20px';
    }

  }

  return styleObject;
};

