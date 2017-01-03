import * as React from 'react';

export interface IPivotItemProps extends React.HTMLProps<HTMLDivElement> {
    linkText: string;
    itemKey ?: string;
    itemCount ?: number;
}
