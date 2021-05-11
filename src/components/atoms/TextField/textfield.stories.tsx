import React from 'react';
import Field, { TextFieldType }from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'TextField',
    component: Field,
    decorators: [withKnobs],
};

export function TextField() {
    // const textFieldLabel = text('text', 'フィールド');
    const textFieldType = text('type', 'email');
    return <Field inputType={textFieldType as TextFieldType}></Field>;
}
