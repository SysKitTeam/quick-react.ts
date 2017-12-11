import * as React from 'react';
import { PeoplePicker } from './PeoplePicker';

export interface IPeoplePickerProps extends React.Props<PeoplePicker> {
    labelText?: string;
    onChange?: (newValue: any) => void;
    onChanged?: (newValue: any) => void;
    disabled?: boolean;
    className?: string;
}
