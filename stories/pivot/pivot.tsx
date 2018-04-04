/* tslint:disable:no-console */

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, selectV2 } from '@storybook/addon-knobs';
import { Pivot, PivotItem, Label } from '../../src';


const optionsLinks = {
    links: 0,
    tabs: 1,
    minimalTabs: 2,
    minimalTabsNoBorders: 3
};

const stories = storiesOf('Pivot', module);

stories.add('Pivot showcase', () => (
    <div>
                        <Pivot 
                            onLinkClick={(item, ev) => console.log(item)}
                            linkFormat={selectV2('link format', optionsLinks, 0, 'grupa1')}

                        
                        >
                    <PivotItem linkText={'My Files'} itemCount={10}>
                        <Label>Pivot #1</Label>
                    </PivotItem>
                    <PivotItem linkText={'Recent'} disabled={true}>
                        <Label>Pivot #2</Label>
                    </PivotItem>
                    <PivotItem linkText={'Shared with me'}>
                        <Label>Pivot #3</Label>
                    </PivotItem>
                </Pivot>
    </div>
));
