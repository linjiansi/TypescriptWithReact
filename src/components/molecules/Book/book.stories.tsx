import React from 'react';
import Book from './index';
import { withKnobs, text, number, date } from '@storybook/addon-knobs';

export default {
    title: 'Book',
    component: Book,
    decorators: [withKnobs],
};

export function story() {
    // const defaultValue = new Date('May 10 2021');
    const bookName = text('name', 'Book');
    const bookPrice = number('price', 1080);
    // const purchaseDate = date('purchase', defaultValue);
    return <Book bookName={bookName} bookPrice={bookPrice}></Book>;
}