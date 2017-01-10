import * as React from 'react';
import { Popup } from './Popup';
export interface IPopupProps extends React.HTMLProps<Popup> {
    role?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    onDismiss?: (ev?: React.MouseEvent) => any;
    className?: string;
    shouldRestoreFocus?: boolean;
}
