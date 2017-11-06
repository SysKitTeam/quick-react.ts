import * as React from 'react';
import { Dialog } from '../Dialog/Dialog';
import { DialogFooter } from '../Dialog/DialogFooter';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';
import { MessageLevel, IMessageBoxProps, IMessageBoxButton } from './MessageBox.Props';
import './messageBox.scss';

export class MessageBox extends React.Component<IMessageBoxProps, {}> {
    public static defaultProps: any = {
        level: MessageLevel.Information,
        closeText: 'Close',
        acceptText: 'Save',
        isLoading: false
    };

    public render() {
        const {
            message,
            title,
            buttons,
            onCustomButtonClick,
            onClose,
            onAccept,
            closeText,
            acceptText,
            level,
            onDismiss,
            isLoading,
            hasCloseXButton,
            isOpen
        } = this.props;

        const mappedButtons = buttons && buttons.map((button, index) => {
            let buttonText = '';
            let isPrimary = false;
            if (typeof button === 'string') {
                buttonText = button;
            } else {
                const customButton = button as IMessageBoxButton;
                ({ title: buttonText, primary: isPrimary } = customButton);
            }
            return (
                <Button
                    className={isPrimary ? 'button-primary' : 'button-secondary'}
                    onClick={() => onCustomButtonClick(index)}
                >
                    {buttonText}
                </Button>
            );
        });

        let iconName: string;

        switch (level) {
            case MessageLevel.Information:
                iconName = 'icon-details';
                break;
            case MessageLevel.Warning:
                iconName = 'icon-warning';
                break;
            case MessageLevel.Error:
                iconName = 'icon-error';
                break;
        }

        return (
            <Dialog
                title={title}
                isOpen={isOpen}
                onDismiss={onDismiss}
                hasCloseXButton={hasCloseXButton}
                containerClassName="message-box-dialog"
            >
                <div className="message-box-container">
                    <Icon iconName={iconName} />
                    {message}
                </div>
                {
                    isLoading && <Spinner className="message-box-spinner" />
                }
                <DialogFooter>
                    {onClose && <Button className="button-textual" onClick={onClose}>{closeText}</Button>}
                    {buttons && mappedButtons}
                    {onAccept && <Button className="button-primary" onClick={onAccept}>{acceptText}</Button>}
                </DialogFooter>
            </Dialog>
        );
    }
}
