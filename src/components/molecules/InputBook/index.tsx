import React from 'react';
import { ImageComponent } from '../../atoms/Image';
import { TextFieldComponent } from '../TextField/index';
import { InputBookContainer, TextFieldContainer } from './style';

export function InputBookComponent() {
  return (
    <InputBookContainer>
      <ImageComponent></ImageComponent>
      <TextFieldContainer>
        <TextFieldComponent textFieldType={'bookName'}></TextFieldComponent>
        <TextFieldComponent textFieldType={'bookPrice'}></TextFieldComponent>
        <TextFieldComponent textFieldType={'purchaseDate'}></TextFieldComponent>
      </TextFieldContainer>
    </InputBookContainer>
  );
}
