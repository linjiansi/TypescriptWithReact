import React from 'react';
import TextField from '../../atoms/TextField/index';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: yellow;
    margin: 20px;
`;

const Img = styled.img`
    width: 16rem;
    height: 16rem;
`;

const InputBookContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    background-color: pink;
    margin: 50px 20px;
`;

export default function InputBook() {
    return (
        <InputBookContainer>
            <Img src='https://source.unsplash.com/random'></Img>
            <TextFieldContainer>
                <TextField inputType={'bookName'}></TextField>
                <TextField inputType={'bookPrice'}></TextField>
                <TextField inputType={'purchaseDate'}></TextField>
            </TextFieldContainer>
        </InputBookContainer>
    );
}

