import * as React from 'react';
import * as classNames from 'classnames';
import { IMessageBarProps, MessageBarType } from './MessageBar.Props';
import { getId } from '../../utilities/getId';
import { Icon } from '../../components/Icon/Icon';
import { Button } from '../../components/Button/Button';
import { ButtonType } from '../../components/Button/Button.Props';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import './MessageBar.scss';

export interface IMessageBarState {
    labelId?: string;
}

export class MessageBar extends React.Component<IMessageBarProps, IMessageBarState> {
    public static defaultProps: IMessageBarProps = {
        messageBarType: MessageBarType.info,
        onDismiss: null,
        hasDontShowAgain: false,
        dontShowAgainChecked: false
    };

    private ICON_MAP = {
        [MessageBarType.info]: 'icon-Details',
        [MessageBarType.warning]: 'icon-Warning',
        [MessageBarType.error]: 'icon-Error',
        [MessageBarType.success]: 'icon-Checkmark'
    };

    constructor(props: IMessageBarProps) {
        super(props);

        this.state = {
        labelId: getId('messageBar')
        };
    }

    public render(): JSX.Element {
        let { hasDontShowAgain, dontShowAgainChecked, dontShowAgainClicked } = this.props;

        const messageBarClassName = classNames(
            'messageBar',
            'messageBar-singleline',
            [this.props.className],
            {
                'messageBar-info': this.props.messageBarType === MessageBarType.info,
                'messageBar-error': this.props.messageBarType === MessageBarType.error,
                'messageBar-success': this.props.messageBarType === MessageBarType.success,
                'messageBar-warning': this.props.messageBarType === MessageBarType.warning
            }
        );

        return (
            <div className={ messageBarClassName } role="status">
                <div className={'messageBar-content'}>
                { this._getIconSpan() }
                <div className={'messageBar-actionables'}>
                    { this._getDismissDiv() }
                    { this._getDontShowAgainDiv() }
                    <div className={'messageBar-text'} id={ this.state.labelId }>
                    <span className={ this._getInnerTextClassName() }>
                        { this.props.children }
                    </span>
                    </div>
                </div>
                { this._getActionsDiv() }
                </div>
            </div>
        );
    }

    private _getIconSpan(): JSX.Element {
        return (
            <div className={'messageBar-icon'}>
                <Icon iconName={ this.ICON_MAP[this.props.messageBarType] }></Icon>
            </div>
        );
    }

    private _getInnerTextClassName(): string {
        return this.props.onDismiss || this.props.actions ? 'messageBar-innerTextPadding' : 'messageBar-innerText';
    }

    private _getActionsDiv(): JSX.Element {
        if (this.props.actions) {
            return (
                <div className={'messageBar-actionsOneline'}>
                    { this._getDismissDiv() }
                    { this.props.actions }
                </div>
            );  
        }
        return null;
    }

    private _getDismissDiv(): JSX.Element {
        if (this.props.onDismiss != null) {
            return (
                <Icon
                    disabled={ false }
                    className={'messageBar-dismissal'}
                    onClick={ this.props.onDismiss } 
                    iconName={'icon-Delete'}/>
            );
        }
        return null;
    }

    private _getDontShowAgainDiv(): JSX.Element {
        let { hasDontShowAgain, dontShowAgainChecked, dontShowAgainClicked } = this.props;
        
        if (this.props.hasDontShowAgain != null && this.props.hasDontShowAgain) {
            return (
                <Checkbox className={'messageBar-checkbox'} checked={ this.props.dontShowAgainChecked } label={'Dont show this message again'} onChange={ this.props.dontShowAgainClicked }></Checkbox>
            );
        }
        
        return null;
    }
}
