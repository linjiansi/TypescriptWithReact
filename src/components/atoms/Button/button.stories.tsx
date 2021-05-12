import React from 'react';
import Button, { ButtonColor } from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

export function ContainedButton() {
    const buttonLabel = text('text', 'ボタン');
    const buttonColor = text('color', 'primary') as ButtonColor;
    return <Button buttonColor={buttonColor}>{buttonLabel}</Button>;
}