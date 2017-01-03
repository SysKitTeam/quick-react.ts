import * as React from 'react';

export interface IHistoryProps extends React.HTMLProps<HTMLElement> {
    onBack?: React.MouseEventHandler;
    onForward?: React.MouseEventHandler;
}
