import * as React from 'react';
import * as classNames from 'classnames';
import { ISpinnerProps, SpinnerType} from './Spinner.Props';
import './Spinner.scss';

export class Spinner extends React.Component<ISpinnerProps, any> {
    public static defaultProps: ISpinnerProps = {
        type: SpinnerType.normal
    };

    public render() {
        let { type, label, className } = this.props;

        return (
            <div className={ classNames('spinner', className )}>
                <div className={ classNames('spinner-circle',
                   { 'spinner-normal': type === SpinnerType.normal },
                   { 'spinner-large': type === SpinnerType.large })
                }>
                </div>
                { label && (
                    <div className={'spinner-label'}>{ label }</div>
                )}
            </div>
        );
    }
}

