import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from './index';

it('renders correctly at Home', () => {
  const tree = renderer
    .create(<Home></Home>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
