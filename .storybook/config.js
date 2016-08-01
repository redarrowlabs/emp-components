import { configure } from '@kadira/storybook';

function loadStories() {
  require('../packages/emp-component-button/story.js');
  // require as many stories as you need.
}

configure(loadStories, module);