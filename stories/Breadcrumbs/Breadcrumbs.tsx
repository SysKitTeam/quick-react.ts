/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Label } from './../../src/components/Label/Label';
import { Breadcrumbs } from './../../src/components/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from './../../src/components/Breadcrumbs/BreadcrumbItem';
import { items } from '../MockData/breadcrumbs';

const $secondaryColor = '#4D4D4F';
const $whiteColor = '#FFFFFF';

const stories = storiesOf('breadcrumbs', module);
stories.addDecorator(withKnobs);
stories.add('Showcase', () => (
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
));
