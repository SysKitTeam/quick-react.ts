import * as React from 'react';

export interface IMessageBarProps extends React.HTMLProps<HTMLElement> {
    messageBarType ?: MessageBarType;
    actions ?: JSX.Element;
    onDismiss?: (ev?: React.MouseEvent<HTMLElement>) => any;
    hasDontShowAgain ?: boolean;
}

export enum MessageBarType {
    info,
    error,
    warning,
    success
}
