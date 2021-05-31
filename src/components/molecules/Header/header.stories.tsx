import React from 'react';
import { HeaderComponent, HeaderType } from './index';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Header',
  component: HeaderComponent,
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

  return <HeaderComponent headerType={headerType}></HeaderComponent>;
}
