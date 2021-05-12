import React from 'react';
import TextField from '../../atoms/TextField/index';

export default function InputBook() {
    return (
        <div>
            <img src='https://source.unsplash.com/random'></img>
            <TextField inputType={'bookName'}></TextField>
            <TextField inputType={'bookPrice'}></TextField>
            <TextField inputType={'purchaseDate'}></TextField>
        </div>
    );
}

