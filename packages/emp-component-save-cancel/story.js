import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { SaveCancel } from './index';

storiesOf('SaveCancel', module)
  .add('ideal', () => (
    <SaveCancel>
      <div>Inner Content</div>
    </SaveCancel>
  ))