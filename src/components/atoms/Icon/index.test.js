import React from 'react';
import renderer from 'react-test-renderer';
import { IconComponent } from './index';

it ('renders correctly at IconComponent', () => {
  const tree = renderer
    .create(<IconComponent></IconComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
