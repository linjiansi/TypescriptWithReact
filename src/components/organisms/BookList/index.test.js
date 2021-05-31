import React from 'react';
import renderer from 'react-test-renderer';
import { BookListComponent } from './index';

it('renders correctly at BookListComponent', () => {
  const tree = renderer
    .create(<BookListComponent></BookListComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
