import React from 'react';
import renderer from 'react-test-renderer';
import { AuthComponent } from './index';

it('renders correctly at AuthComponent', () => {
  const tree = renderer
    .create(<AuthComponent authType='login'></AuthComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
