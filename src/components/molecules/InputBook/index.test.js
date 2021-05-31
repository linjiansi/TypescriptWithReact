import React from 'react';
import renderer from 'react-test-renderer';
import { InputBookComponent } from './index';

it('renders correctly at InputBookComponent', () => {
  const tree = renderer
    .create(<InputBookComponent></InputBookComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
