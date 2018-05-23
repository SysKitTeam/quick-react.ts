import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import * as Callout from './CalloutExample';
import { DirectionalHint } from '../../src/utilities/DirectionalHint';

const stories = storiesOf('Callout', module);
stories.add('Showcase', () => (
        <Callout.Index/>
    ));
