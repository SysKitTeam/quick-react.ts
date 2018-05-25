import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { ChoiceGroup } from '../../src/components/ChoiceGroup/ChoiceGroup';

const stories = storiesOf('Choice Group', module);
stories.add('Showcase', () => (
    <div>
        <ChoiceGroup options={[
                { key: 'A', text: 'Option A' },
                { key: 'B', text: 'Option B', checked: true },
                { key: 'C', text: 'Option C', disabled: true },
                { key: 'D', text: 'Option D', disabled: true }
            ]} label="Pick one">
        </ChoiceGroup>
    </div>
));
