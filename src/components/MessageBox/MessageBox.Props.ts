export interface IMessageBoxButton {
    title: string;
    primary?: boolean;
}

export enum MessageLevel {
    Information,
    Warning,
    Error
}

export interface IMessageBoxProps {
    isOpen: boolean;
    title?: string;
    message: string | JSX.Element;
    level?: MessageLevel;
    onDismiss?(): void;
    onClose?(): void;
    onAccept?(): void;
    hasCloseXButton?: boolean;
    closeText?: string;
    acceptText?: string;
    buttons?: Array<string | IMessageBoxButton>;
    onCustomButtonClick?(index: number): void;
    isLoading?: boolean;
}
