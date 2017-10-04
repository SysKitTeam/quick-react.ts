import * as React from 'react';

export interface IToggleSwitchProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    onChange?: (checked?: boolean) => void;
    onText?: string;
    offText?: string;
}
