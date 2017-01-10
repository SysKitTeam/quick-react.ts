import * as React from 'react';
export interface IMessageBarProps extends React.HTMLProps<HTMLElement> {
    messageBarType?: MessageBarType;
    actions?: JSX.Element;
    onDismiss?: (ev?: React.MouseEvent) => any;
    hasDontShowAgain?: boolean;
}
export declare enum MessageBarType {
    info = 0,
    error = 1,
    warning = 2,
    success = 3,
}
