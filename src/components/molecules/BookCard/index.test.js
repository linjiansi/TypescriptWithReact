import React from 'react';
import renderer from 'react-test-renderer';
import { BookCardComponent } from './index';

it('renders correctly at BookCardComponent', () => {
  const tree = renderer
    .create(<BookCardComponent bookName='test'
                               bookPrice={1000}
                               purchaseDate='2021/05/25'></BookCardComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
