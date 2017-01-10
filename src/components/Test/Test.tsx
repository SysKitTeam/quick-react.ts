import * as React from 'react';
import * as classNames from 'classnames';
import { ITestProps } from './Test.Props';
//import './Test.scss';

const statusClasses = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
};


export function Test({
    isVisible,
    status = 'info',
    id = ''
} : ITestProps) {

    const testClasses = classNames({
        block: isVisible,
        hide: !isVisible,
        [statusClasses[status]]: true
    });

    return (
        <div id={id} className= {testClasses}>
            AAAAAA
        </div>
    );
};
