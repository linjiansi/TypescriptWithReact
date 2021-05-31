import React from 'react';
import renderer from 'react-test-renderer';
import { SignUp } from './index';

it('renders correctly at SignUp', () => {
  const tree = renderer
    .create(<SignUp></SignUp>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
