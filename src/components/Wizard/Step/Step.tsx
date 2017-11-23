import * as React from 'react';
import * as classNames from 'classnames';
import { IStepProps } from './Step.Props';
import { Icon } from '../../../components/Icon/Icon';
import './Step.scss';

const step: React.SFC<IStepProps> = (props) => {
    const { title, active, completed, first, isLast } = props;
    const stepClassName = classNames({
        'step': true,
        'inner-left': !first,
        'inner-right': !isLast,
        'active': active,
        'completed': completed
    });

    const circleClassName = classNames({
        'step-circle': true,
        'completed': completed,
        'active': active || completed
    });

    const titleClassName = classNames({
        'step-title': true,
        'completed': completed,
        'active': active || completed
    });

    return (
        <div className={stepClassName}>
            <div className={circleClassName}>
                {
                    completed && <Icon className="icon-checkmark wizard-checkmark" />
                }
            </div>
            <div className="step-title" title={title}>{title}</div>
        </div>
    );
};

export { step as Step };
