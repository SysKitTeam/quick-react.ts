import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button/button');
  require('../stories/breadcrumbs/breadcrumbs');
  require('../stories/quickgrid/quickgrid');
}

configure(loadStories, module);