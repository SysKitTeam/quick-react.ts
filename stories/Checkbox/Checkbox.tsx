import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import * as Checkbox from './CheckboxExample';

const stories = storiesOf('Checkbox', module);
stories.add('Showcase', () => (
        <Checkbox.Index/>
    ));
