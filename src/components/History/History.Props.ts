import * as React from 'react';

export interface IHistoryProps extends React.HTMLProps<HTMLElement> {
    onBack?: React.MouseEventHandler<HTMLButtonElement>;
    onForward?: React.MouseEventHandler<HTMLButtonElement>;
}
