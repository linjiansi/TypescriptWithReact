import React from 'react';
import { BookScreenComponent, BookMode } from './index';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'BookScreen',
  component: BookScreenComponent,
  decorators: [withKnobs],
};

export function Story() {
  const label = 'bookMode';
  const option = {
    Edit: 'edit',
    Add: 'add',
  };
  const defaultValue = 'edit';

  const bookMode = select(label, option, defaultValue) as BookMode;

  return <BookScreenComponent bookMode={bookMode}></BookScreenComponent>;
}
