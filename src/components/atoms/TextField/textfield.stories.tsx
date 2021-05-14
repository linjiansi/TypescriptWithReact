import React from 'react';
import Field, { TextFieldType }from './index';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title: 'TextField',
    component: Field,
    decorators: [withKnobs],
};

export function story() {
    const label = 'textFieldLabel';
    const option = {
        Email: 'email',
        Password: 'password',
        ConfirmPassword: 'confirmPassword',
        BookName: 'bookName',
        BookPrice: 'bookPrice',
        PurchaseDate: 'purchaseDate',
    };
    const defaultValue = 'email';

    const textFieldType = select(label, option, defaultValue) as TextFieldType;

    return <Field textFieldType={textFieldType}></Field>;
}
