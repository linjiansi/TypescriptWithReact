import React from 'react';
import { ImageComponent } from '../../atoms/Image';
import { TextFieldComponent } from '../TextField/index';
import { InputBookContainer, TextFieldContainer } from './style';

export function InputBookComponent() {
  return (
    <InputBookContainer>
      <ImageComponent></ImageComponent>
      <TextFieldContainer>
        <TextFieldComponent textFieldType='BOOK_NAME'></TextFieldComponent>
        <TextFieldComponent textFieldType='BOOK_PRICE'></TextFieldComponent>
        <TextFieldComponent textFieldType='PURCHASE_DATE'></TextFieldComponent>
      </TextFieldContainer>
    </InputBookContainer>
  );
}
