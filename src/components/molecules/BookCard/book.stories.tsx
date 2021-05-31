import React from 'react';
import { BookCardComponent } from './index';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Book',
  component: BookCardComponent,
  decorators: [withKnobs],
};

export function story() {
  const bookName = text('name', 'Book');
  const bookPrice = number('price', 1080);

  return <BookCardComponent bookName={bookName} bookPrice={bookPrice}></BookCardComponent>;
}
