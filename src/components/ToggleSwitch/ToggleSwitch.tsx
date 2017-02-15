import * as React from 'react';
import * as classNames from 'classnames';
import { IToggleSwitchProps } from './ToggleSwitch.Props';
import './ToggleSwitch.scss';
import { autobind } from '../../utilities/autobind';

export class ToggleSwitch extends React.Component<IToggleSwitchProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            checked : props.checked || false
        };
    }

    public static defaultProps : IToggleSwitchProps = {
        checked : false
    };

    public render() : JSX.Element {
        let{
            checked,
            onChange,
            className
        } = this.props;

        const switchClassName = classNames(
            
            className,
            'toggle-switch'
        );
        const slidersClassName = classNames(
            'toggle-slider'
        );
        return(
            <label className={switchClassName}>
                <input type="checkbox" onChange={this._onChange} checked={this.state.checked}/>
                <div className={slidersClassName}></div>
            </label>
        );
    }

    @autobind
    private _onChange(ev: React.FormEvent<HTMLInputElement>) : void {
        if (this.props.onChange) {
            this.props.onChange(!this.state.checked);
        }
        this.setState({checked : !this.state.checked});
    }
}
