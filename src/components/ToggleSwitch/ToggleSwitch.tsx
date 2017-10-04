import * as React from 'react';
import * as classNames from 'classnames';
import { IToggleSwitchProps } from './ToggleSwitch.Props';
import './ToggleSwitch.scss';
import { autobind } from '../../utilities/autobind';

export class ToggleSwitch extends React.Component<IToggleSwitchProps, any> {
    public static defaultProps = {
        onText: '',
        offText: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            checked : props.checked === undefined ? false : props.checked
        };
    }

    public render() : JSX.Element {
        let{
            checked,
            onChange,
            disabled,
            className
        } = this.props;

        const isChecked = checked === undefined ? this.state.checked : checked;

        const switchClassName = classNames(
            className,
            'toggle-switch',
            {
                'checked': isChecked
            }
        );

        const slidersClassName = classNames(
            'toggle-slider'
        );
        return(
            <label className={switchClassName}>
                <input type="checkbox" disabled={disabled} onChange={this._onChange} checked={isChecked}/>
                <div className={slidersClassName} data-on={this.props.onText} data-off={this.props.offText}></div>
            </label>
        );
    }

    @autobind
    private _onChange(ev: React.FormEvent<HTMLInputElement>) : void {
        const isChecked = (ev.target as HTMLInputElement).checked;
        if (this.props.onChange) {
            this.props.onChange(isChecked);
        }
        if (this.props.checked === undefined) {
            this.setState({checked : isChecked});
        }
    }
}
