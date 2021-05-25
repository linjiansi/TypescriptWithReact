import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from './index';

it('renders correctly at Login', () => {
  const tree = renderer
    .create(<Login></Login>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
