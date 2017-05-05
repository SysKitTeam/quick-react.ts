import * as React from 'react';

export interface ITestProps extends React.Props <any> {
    isVisible ?: boolean;
    status ?: string;
    id ?: string;
}
