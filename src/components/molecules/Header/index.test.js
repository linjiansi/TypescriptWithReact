import React from 'react';
import renderer from 'react-test-renderer';
import { HeaderComponent } from './index';

it('renders correctly at HeaderComponent', () => {
  const tree = renderer
    .create(<HeaderComponent headerType='main'></HeaderComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
