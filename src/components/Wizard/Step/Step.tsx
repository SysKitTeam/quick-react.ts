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
        'active': active
    });

    const connectorClassName = classNames({
        'step-connector': true,
        'completed': completed,
        'active': completed
    });

    return (
        <div>
            <div className={stepClassName}>
                <div className={circleClassName}>
                    {
                        completed && <Icon className="icon-checkmark wizard-checkmark" />
                    }
                </div>
                <div className={titleClassName} title={title}>{title}</div>
            </div>
            {!isLast &&
                < div className={connectorClassName}>
                </div>
            }
        </div >
    );
};

export { step as Step };
