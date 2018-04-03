import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button/button');
  require('../stories/breadcrumbs/breadcrumbs');
  //require('../stories/quickGrid/quickGrid');
  //require('../stories/barChart/barChart');
}

configure(loadStories, module);