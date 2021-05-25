import React from 'react';
import renderer from 'react-test-renderer';
import { EditBook } from './index';

it('renders correctly at EditBook', () => {
  const tree = renderer
    .create(<EditBook></EditBook>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
