import * as React from 'react';
import { Spinner } from './Spinner';

export interface ISpinnerProps extends React.Props<Spinner> {
    type?: SpinnerType;
    label?: string;
    className?: string;
}

export enum SpinnerType {
    small,
    normal,
    large
}
