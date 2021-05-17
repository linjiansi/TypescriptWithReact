import React from 'react';
import Book from './index';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Book',
  component: Book,
  decorators: [withKnobs],
};

export function story() {
  const bookName = text('name', 'Book');
  const bookPrice = number('price', 1080);
  return <Book bookName={bookName} bookPrice={bookPrice}></Book>;
}
