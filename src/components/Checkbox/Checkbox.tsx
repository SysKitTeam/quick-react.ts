import * as React from 'react';
import * as classNames from 'classnames';
import { ICheckboxProps } from './Checkbox.Props';
import { assign } from '../../utilities/object';
import autobind from '../../utilities/autobind';
import { getId } from '../../utilities/getId';
import CommonComponent from '../Common/Common';
import './Checkbox.scss';

export interface ICheckboxState {
    isFocused ?: boolean;
    isChecked ?: boolean;
}

export default class Checkbox extends CommonComponent<ICheckboxProps, ICheckboxState> {

    public static defaultProps: ICheckboxProps = {
    };

    private id: string;
    private _checkBox: HTMLInputElement;

    constructor(props) {
        super(props);

        this.id = getId('checkbox-');
        this.state = {
            isFocused: false,
            isChecked: props.defaultChecked || false
        };
    }

    render() {
        const { checked, defaultChecked, disabled, inputProps, label, id } = this.props;
        const { isFocused } = this.state;
        const isChecked = checked === undefined ? this.state.isChecked : checked;

         const className = classNames({
            'checkbox': true
        }, [this.props.className]);
        
        const labelClassName = classNames({
            'checkbox-label': true,
            'is-checked': this.state.isChecked,
            'is-disabled': disabled
        });
 
        return (
            <div className={className}>
                <input
                    { ...inputProps }
                    { ...(checked !== undefined && { checked }) }
                    { ...(defaultChecked !== undefined && { defaultChecked }) }
                    disabled={ disabled }
                    ref={ this._resolveRef('_checkBox') }
                    className={'checkbox-input'}
                    id={ this.id }
                    name={ this.id }
                    type="checkbox" 
                    onChange={ this._onChange }
                    onFocus={ this._onFocus }
                    onBlur={ this._onBlur }  
                />
                <label htmlFor={ this.id }
                    className={labelClassName}>
                    { label && <span className={'label'}>{label}</span> }
                </label>
            </div>
        );
    };

    public get checked(): boolean {
        return this._checkBox ? this._checkBox.checked : false;
    }

    public focus() {
        if (this._checkBox) {
            this._checkBox.focus();
        }
    }

    @autobind
    private _onFocus(ev: React.FocusEvent): void {
        const { inputProps } = this.props;

        if (inputProps && inputProps.onFocus) {
            inputProps.onFocus(ev);
        }

        this.setState({ isFocused: true });
    }

    @autobind
    private _onBlur(ev: React.FocusEvent): void {
        const { inputProps } = this.props;

        if (inputProps && inputProps.onBlur) {
            inputProps.onBlur(ev);
        }

        this.setState({ isFocused: false });
    }

    @autobind
    private _onChange(ev: React.FormEvent) {
        const { onChange } = this.props;
        const isChecked = (ev.target as HTMLInputElement).checked;
        
        if (onChange) {
            onChange(ev, isChecked);
        }

        if (this.props.checked === undefined) {
            this.setState({ isChecked: isChecked });
        }
    }
};
