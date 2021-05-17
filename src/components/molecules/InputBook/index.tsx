import React from 'react';
import TextField from '../../atoms/TextField/index';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Img = styled.img`
  width: 16rem;
  height: 16rem;
`;

const InputBookContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 20px;
`;

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
