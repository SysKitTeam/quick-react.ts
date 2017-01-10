import * as React from 'react';
import * as classNames from 'classnames';
import { IButtonProps, IButton, ButtonType } from './Button.Props';
import {getNativeAttributes, buttonAttributes, anchorAttributes} from '../../utilities/attributes';
import {assign} from '../../utilities/object';
import { Icon } from '../Icon/Icon';
//import './Button.scss';

export class Button extends React.Component <IButtonProps, any> implements IButton {
    
    private _buttonElement: HTMLButtonElement;
    constructor (props : IButtonProps) {
        super(props);
    }
    
    public render(): JSX.Element {
        let {
            children,
            icon,
            description,
            ariaLabel,
            ariaDescription,
            href,
            disabled,
            onClick,
            isVisible,
            buttonType
        } = this.props;
        
        const renderAsAnchor: boolean = !!href;
        const tag = renderAsAnchor
            ? 'a'
            : 'button';
        
        const nativeProps = getNativeAttributes(this.props, renderAsAnchor
            ? anchorAttributes
            : buttonAttributes);
        
        const className = classNames({
            'button': !renderAsAnchor,
            'link': renderAsAnchor,
            'disabled-link': this.props.disabled && renderAsAnchor,
            'hide-button': isVisible === false,
            'button-primary': buttonType === ButtonType.primary
        }, [this.props.className]);
        
        const iconElement = icon
            ? <Icon iconName={icon}></Icon>
            : null;

        return React.createElement(
            tag, 
            assign(
                {}, 
                nativeProps, 
                href ? {href} : null, 
                { 'ref': (c : HTMLButtonElement): HTMLButtonElement => this._buttonElement = c }, 
                onClick && { 'onClick': onClick },
                disabled && { 'disabled': disabled},
                {className}
            ), 
            iconElement, 
            <span className="button-label">{children}</span>
        );
    }
    public focus(): void {
        if (this._buttonElement) {this._buttonElement.focus(); }
    }
}
