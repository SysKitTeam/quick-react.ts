/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Label } from './../../src/components/Label/Label';
import { Breadcrumbs } from './../../src/components/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from './../../src/components/Breadcrumbs/BreadcrumbItem';

const $secondaryColor = '#4D4D4F';
const $whiteColor = '#FFFFFF';

const items = [
    { displayName: 'Home', key: 'home' },
    {
        displayName: 'Event viewer',
        key: 'eventViewer',
        children: [
            {
                displayName: 'Farm 1',
                key: '1db521f3-f28a-427f-8dec-8aadf5224ce7',
                text: 'Farm 1',
                children: [
                    { displayName: 'Server 33', key: '6353dfd5-62ae-43fb-95b1-793069970c16' },
                    { displayName: 'Server 43', key: '0625a264-9a87-4339-acc1-852fed86fda7' }
                ]
            },
            {
                displayName: 'Farm 2',
                key: '0625a264-9a87-4339-acc1-852fed86fda7',
                children: [
                    { displayName: 'Server 3', key: '1' },
                    { displayName: 'Server 4', key: '2' }
                ]
            }
        ]
    },
    {
        displayName: 'Performance',
        key: 'performance',
        children: [
            {
                displayName: 'Farm 1',
                key: '1db521f3-f28a-427f-8dec-8aadf5224ce7',
                children: [
                    { displayName: 'Server 1Server 1Server 1Server 1Server 1Server 1Server 1', key: '6353dfd5-62ae-43fb-95b1-793069970c16' },
                    { displayName: 'Server 1', key: '0625a264-9a87-4339-acc1-852fed86fda7' }
                ]
            },
            {
                displayName: 'Farm 2',
                key: '07bf612a-1354-4269-9339-bbca5ecca246',
                text: 'Farm 2',
                children: [
                    { displayName: 'Server 3', key: '1' },
                    { displayName: 'Server 4', key: '2' }
                ]
            },
            {
                displayName: 'Farm 3',
                key: '2c2e3d11-aaac-40a5-8136-071783ae8c36',
                children: [
                    { displayName: 'Server 4', key: '470cd919-5b73-4911-91b9-fb2f3db7645c' },
                    { displayName: 'Server 5', key: '496efa49-57b3-4d49-b7bd-80806a2f03b5' }
                ]
            }
        ]
    }
];

const children = [
    { displayName: 'Server 4', url: '470cd919-5b73-4911-91b9-fb2f3db7645c' },
    { displayName: 'Server 5', url: '496efa49-57b3-4d49-b7bd-80806a2f03b5' }
];

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Label>Breadcrumbs with default icons:</Label>
                <Breadcrumbs
                    homeDisplayName={'Home'}
                    homeUrl={'/'}
                    items={items}
                    url={'/performance/1db521f3-f28a-427f-8dec-8aadf5224ce7/1'}
                    onPathClick={(path) => console.log(path)} />

                <br />
                <br />

                <Label>Breadcrumbs with custom icons:</Label>
                <Breadcrumbs
                    homeIconName={'icon-ck_kit'}
                    homeUrl={'/'}
                    items={items}
                    url={'/performance/07bf612a-1354-4269-9339-bbca5ecca246/1'}
                    onPathClick={(path) => console.log(path)} />

                <br />
                <br />

                <div style={{ backgroundColor: $secondaryColor }}>
                    <Label style={{ color: $whiteColor }}>Breadcrumbs with custom icons:</Label>
                    <Breadcrumbs
                        className={'breadcrumbs-white'}
                        homeIconName={'icon-ck_kit'}
                        homeUrl={'/'}
                        items={items}
                        url={'/performance/07bf612a-1354-4269-9339-bbca5ecca246/1'}
                        onPathClick={(path) => console.log(path)} />
                </div>

                <br />
                <br />

                <div style={{ backgroundColor: $secondaryColor }}>
                    <Label style={{ color: $whiteColor }}>Breadcrumbs with default icons:</Label>
                    <Breadcrumbs
                        className={'breadcrumbs-white'}
                        homeDisplayName={'Home'}
                        homeUrl={'/'}
                        items={items}
                        url={'/performance/07bf612a-1354-4269-9339-bbca5ecca246/1'}
                        onPathClick={(path) => console.log(path)} />
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
