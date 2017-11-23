import * as React from 'react';

export interface IToggleSwitchProps {
    checked?: boolean;
    className?: string;
    label?: string;
    disabled?: boolean;
    onChange?: (checked?: boolean) => void;
}
