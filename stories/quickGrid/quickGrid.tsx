import * as React from 'react';

import { storiesOf } from '@storybook/react';
import * as QuickGrid from '../../examples/src/QuickGrid';
import * as TreeGrid from '../../examples/src/TreeGrid';


const stories = storiesOf('quickGrid', module);

stories.add('quickGrid Example', () => (
        <QuickGrid.Index/>
    ))
    .add('treeGrid Example', () => (
        <TreeGrid.Index/>
    ));

