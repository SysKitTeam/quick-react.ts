/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Breadcrumbs } from './../../src/components/Breadcrumbs/Breadcrumbs';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Breadcrumbs items={[
                    { text: 'Files', 'key': 'Files' },
                    { text: 'This is folder 1', key: 'f1', href: '#1' },
                    { text: 'This is folder 2', key: 'f2', href: '#2' },
                    {
                        text: 'This is folder 3', key: 'f3', href: '#3', children: [
                            { text: 'This is folder 100', key: 'f100' },
                            { text: 'This is folder 200', key: 'f200' }
                        ]
                    },
                    { text: 'This is folder 4', key: 'f4', href: '#4' },
                    { text: 'This is folder 5', key: 'f5', onClick: () => { console.log('click'); } }
                ]}
                maxDisplayedItems={3}>
                </Breadcrumbs>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
