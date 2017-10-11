import * as React from 'react';
import * as classNames from 'classnames';
import { IStepperProps } from './IStepperProps';
import Step from './Step';

export default class Stepper extends React.Component<IStepperProps, any> {
  constructor(props: IStepperProps) {
    super(props);
  }

  public static default: IStepperProps = {
    activeStep: 0
  };

  public render() {
    return (
      <div className="wizard-content">
        <div className="wizard-stepper">
          {this.props.steps.map((step, index) => (
            <Step
              key={index}
              width={100 / this.props.steps.length}
              title={step.title}
              href={step.href}
              active={index === this.props.activeStep}
              completed={index < this.props.activeStep}
              first={index === 0}
              isLast={index === this.props.steps.length - 1}
              index={index}
              activeColor={this.props.activeColor}
              completeColor={this.props.completeColor}
              defaultColor={this.props.defaultColor}
              circleFontColor={this.props.circleFontColor}
              activeTitleColor={this.props.activeTitleColor}
              completeTitleColor={this.props.completeTitleColor}
              defaultTitleColor={this.props.defaultTitleColor}
              size={this.props.size}
              circleFontSize={this.props.circleFontSize}
              titleFontSize={this.props.titleFontSize}
              circleTop={this.props.circleTop}
              titleTop={this.props.titleTop}
              defaultOpacity={this.props.defaultOpacity}
              completeOpacity={this.props.completeOpacity}
              activeOpacity={this.props.activeOpacity}
              defaultTitleOpacity={this.props.defaultTitleOpacity}
              completeTitleOpacity={this.props.completeTitleOpacity}
              activeTitleOpacity={this.props.activeTitleOpacity}
              barStyle={this.props.barStyle}
              defaultBorderColor={this.props.defaultBorderColor}
              completeBorderColor={this.props.completeBorderColor}
              activeBorderColor={this.props.activeBorderColor}
              defaultBorderStyle={this.props.defaultBorderStyle}
              completeBorderStyle={this.props.completeBorderStyle}
              activeBorderStyle={this.props.activeBorderStyle}
              defaultBarColor={this.props.defaultBarColor}
              completeBarColor={this.props.completeBarColor}
            />
          ))}
        </div>
      </div>
    );
  }
}
