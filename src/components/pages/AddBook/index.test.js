import React from 'react';
import renderer from 'react-test-renderer';
import { AddBook } from './index';

it('renders correctly at AddBook', () => {
  const tree = renderer
    .create(<AddBook></AddBook>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
