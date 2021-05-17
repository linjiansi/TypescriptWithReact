import React from 'react';
import TextField from '../../atoms/TextField/index';
import { Img, InputBookContainer, TextFieldContainer } from './style';

export default function InputBook() {
  return (
    <InputBookContainer>
      <Img src="https://source.unsplash.com/random"></Img>
      <TextFieldContainer>
        <TextField textFieldType={'bookName'}></TextField>
        <TextField textFieldType={'bookPrice'}></TextField>
        <TextField textFieldType={'purchaseDate'}></TextField>
      </TextFieldContainer>
    </InputBookContainer>
  );
}
