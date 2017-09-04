import * as React from 'react';
import * as classNames from 'classnames';
import './Step.scss';
import {IStepProps} from './IStepProps';
import {IStepState} from './IStepState';
import PropTypes from 'prop-types';
import {Icon} from '../../components/Icon/Icon';

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

export default class Step extends React.Component<IStepProps, IStepState> {
  constructor(props: IStepProps) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
  }

  public static defaultProps: IStepProps = {
    activeColor: '#5CA704',
    completeColor: '#FFF',
    defaultColor: '#FFF',
    defaultBorderStyle: 'solid',
    defaultBorderColor: '#757575',
    completeBarColor: '#5CA704',
    completeBorderColor: '#5CA704',
    completeBorderStyle: 'solid',
    activeTitleColor: '#000',
    completeTitleColor: '#000',
    defaultTitleColor: '#757575',
    circleFontColor: '#FFF',
    size: 24,
    circleFontSize: 16,
    titleFontSize: 16,
    circleTop: 24,
    titleTop: 8,
    defaultBarColor: '#E0E0E0',
    barStyle: 'solid'
  };


  getStyles() {
    const {
      activeColor, completeColor, defaultColor, circleFontColor,
      activeTitleColor, completeTitleColor, defaultTitleColor,
      size, circleFontSize, titleFontSize,
      circleTop, titleTop, width, completeOpacity, activeOpacity, defaultOpacity,
      completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle, defaultBarColor,
      completeBarColor, defaultBorderColor, completeBorderColor, activeBorderColor,
      defaultBorderStyle, completeBorderStyle, activeBorderStyle, optionalButtons
    } = this.props;

    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop
      },
      circle: {
        width: size,
        height: size,
        margin: '0 auto',
        backgroundColor: defaultColor,
        borderRadius: '50%',
        textAlign: 'center',
        padding: 1,
        fontSize: circleFontSize,
        color: circleFontColor,
        display: 'block',
        opacity: defaultOpacity,
        borderWidth: '1px',
        borderColor: defaultBorderColor,
        borderStyle: defaultBorderStyle,
        boxSizing: 'border-box'
      },
      activeCircle: {
        backgroundColor: activeColor,
        opacity: activeOpacity,
        borderWidth: (activeBorderColor ? 3 : 0),
        borderColor: activeBorderColor,
        borderStyle: activeBorderStyle
      },
      completedCircle: {
        backgroundColor: completeColor,
        opacity: completeOpacity,
        borderWidth: '1px',
        borderColor: completeBorderColor,
        borderStyle: completeBorderStyle
      },
      index: {
        // lineHeight: `${size + circleFontSize / 4}px`,    change this line when complete icon is not centered
        color: circleFontColor
      },
      title: {
        marginTop: titleTop,
        fontSize: titleFontSize,
        fontWeight: '300',
        textAlign: 'center',
        display: 'block',
        color: defaultTitleColor,
        opacity: defaultTitleOpacity
      },
      activeTitle: {
        color: activeTitleColor,
        opacity: activeTitleOpacity
      },
      completedTitle: {
        color: completeTitleColor,
        opacity: completeTitleOpacity
      },
      leftBar: {
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: defaultBarColor,
        left: 0,
        right: '50%',
        marginRight: size / 2 + 4,
        opacity: defaultOpacity
      },
      rightBar: {
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: defaultBarColor,
        right: 0,
        left: '50%',
        marginLeft: size / 2 + 4,
        opacity: defaultOpacity
      },
      completedBar: {
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: completeBarColor,
        opacity: completeOpacity
      }
    };
  }

  render() {

    const { title, index, active, completed, first, isLast, href } = this.props;

    const styles = this.getStyles();
    const circleStyle = {
      ...styles.circle,
      completedCircle: completed && styles.completedCircle,
      activeCircle: active && styles.activeCircle
    };
    const titleStyle = {
      ...styles.title,
      completedTitle: completed && styles.completedTitle,
      activeTitle: active && styles.activeTitle
    };
    const leftStyle = { ...styles.leftBar, completedBar: (active || completed) && styles.completedBar };
    const rightStyle = { ...styles.rightBar, completedBar: completed && styles.completedBar };

    return (
      <div style={ styles.step as any}>
        <div style={circleStyle as any}>
        {!completed ? (
          <a style={ styles.index }></a>
        ) : (
          <span style={ styles.index }>
          <Icon className="icon-checkmark green-checkmark"></Icon>
          </span>
        )}

        </div>
        {active || completed ? (
          <a style={ titleStyle as any}>{ title }</a>
        ) : (
          <div style={ titleStyle as any }>{ title }</div>
        )}
        { !first && <div style={ leftStyle as any}></div> }
        { !isLast && <div style={ rightStyle as any }></div> }
      </div>
    );
  }
}
