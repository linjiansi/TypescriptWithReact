import React from 'react';
import renderer from 'react-test-renderer';
import { BookScreenComponent } from './index';

it('renders correctly at BookScreenComponent', () => {
  const tree = renderer
    .create(<BookScreenComponent bookMode='add'></BookScreenComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
