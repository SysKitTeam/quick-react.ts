import * as React from 'react';

export interface ICheckboxProps extends React.HTMLProps<HTMLElement> {
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    label?: string;
    disabled?: boolean;
    onChange?: (ev?: React.FormEvent<HTMLElement>, itemId?: string, checked?: boolean) => void;
    inputProps?: React.HTMLProps<HTMLInputElement>;
    itemId?: string;
}

export interface ICheckbox {
    checked: boolean;
    focus(): void;
}
