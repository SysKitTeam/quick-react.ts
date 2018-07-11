import * as React from 'react';
import * as classNames from 'classnames';
import { IStepperProps } from './Stepper.Props';
import { Step } from './../Step/Step';

import './Stepper.scss';

const stepper: React.SFC<IStepperProps> = (props) => {
    return (
        <div className="wizard-stepper">
            {
                props.steps.map((step, index) => {
                    if (!step.isStepHidden) {
                        return (
                            <Step
                                key={index}
                                title={step.title}
                                active={index === props.activeStep}
                                completed={index < props.activeStep}
                                first={index === 0}
                                isLast={index === props.steps.length - 1}
                            />
                        );
                    }
                })}
        </div>
    );
};

export { stepper as Stepper };
