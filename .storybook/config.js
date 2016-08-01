import { configure } from '@kadira/storybook';

function loadStories() {
  require('../packages/emp-component-button/story');
  require('../packages/emp-component-save-cancel/story');
  // require as many stories as you need.
}

configure(loadStories, module);