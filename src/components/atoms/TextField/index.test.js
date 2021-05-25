import React from 'react';
import renderer from 'react-test-renderer';
import { TextFieldComponent } from './index';

it('renders correctly at TextFiledComponent', () => {
  const tree = renderer
    .create(<TextFieldComponent textFieldType='text'></TextFieldComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
