import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import * as CheckboxList from './CheckboxListExample';

const stories = storiesOf('Checkbox List', module);
stories.add('Showcase', () => (
    <CheckboxList.Index/>
));
