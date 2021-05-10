import React from 'react';
import Field from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'TextField',
    component: Field,
    decorators: [withKnobs],
};

export function TextField() {
    const textFieldLabel = text('text', 'フィールド');
    return <Field>{textFieldLabel}</Field>;
}
