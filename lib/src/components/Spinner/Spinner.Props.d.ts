import * as React from 'react';
import { Spinner } from './Spinner';
export interface ISpinnerProps extends React.Props<Spinner> {
    type?: SpinnerType;
    label?: string;
    className?: string;
}
export declare enum SpinnerType {
    normal = 0,
    large = 1,
    larger = 2,
}
