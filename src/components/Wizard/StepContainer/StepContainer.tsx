import * as React from 'react';
import * as classNames from 'classnames';
import './StepContainer.scss';
import { IStepContainerProps } from './StepContainer.props';

const stepContainer: React.SFC<IStepContainerProps> = (props) => {
    const { headerText, className, hideHeader, headerClassName } = this.props;

    const containerClass = classNames('wizard-step-container', this.props.className);
    const headerClass = classNames('wizard-step-header', headerClassName);

    return (
        <div className={containerClass}>
            {
                headerText && !hideHeader && <p className={headerClass}>{headerText}</p>
            }
            {this.props.children}
        </div>
    );
};

export { stepContainer as StepContainer };
