import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import * as DateTimePicker from './DateTimePickerExample';

const stories = storiesOf('DateTime Picker', module);
stories.add('Showcase', () => (
    <DateTimePicker.Index/>
));
