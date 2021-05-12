import React from 'react';
import Header from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Header',
    component: Header,
};

export function story() {
    const title = text('title', '書籍編集');
    const buttonTitle = text('titleButton', 'UPDATE');
    return <Header title={title} buttonTitle={buttonTitle}></Header>
}