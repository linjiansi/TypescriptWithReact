import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonComponent } from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonComponent useCase={'auth'}>テスト</ButtonComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
