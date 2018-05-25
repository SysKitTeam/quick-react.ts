import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import * as ConditionSelector from './ConditionSelectorExample';

const stories = storiesOf('Condition Selector', module);
stories.add('Showcase', () => (
    <ConditionSelector.Index />
));
