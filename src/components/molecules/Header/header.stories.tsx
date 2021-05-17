import React from 'react';
import Header, { HeaderType } from './index';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Header',
  component: Header,
};

export function story() {
  const label = 'headerType';
  const option = {
    Main: 'main',
    BookList: 'bookList',
    EditBook: 'editBook',
    AddBook: 'addBook',
  };
  const defaultValue = 'main';

  const headerType = select(label, option, defaultValue) as HeaderType;

  return <Header headerType={headerType}></Header>;
}
