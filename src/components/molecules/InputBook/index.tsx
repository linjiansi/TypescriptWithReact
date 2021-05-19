import React from 'react';
import { TextFieldComponent } from '../../atoms/TextField/index';
import { Img, InputBookContainer, TextFieldContainer } from './style';

export function InputBookComponent() {
  return (
    <InputBookContainer>
      <Img src="https://source.unsplash.com/random"></Img>
      <TextFieldContainer>
        <TextFieldComponent textFieldType={'bookName'}></TextFieldComponent>
        <TextFieldComponent textFieldType={'bookPrice'}></TextFieldComponent>
        <TextFieldComponent textFieldType={'purchaseDate'}></TextFieldComponent>
      </TextFieldContainer>
    </InputBookContainer>
  );
}
