import * as React from 'react';

export interface ILabelProps extends React.HTMLProps<HTMLElement> {
    required?: boolean;
    className?: string;
    icon?: string;
    iconClassName?: string;
}
