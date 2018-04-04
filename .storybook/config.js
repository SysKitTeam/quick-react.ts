import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button/button');
  require('../stories/breadcrumbs/breadcrumbs');
  //require('../stories/quickGrid/quickGrid');
  //require('../stories/barChart/barChart');
  require('../stories/pivot/pivot');
}

configure(loadStories, module);