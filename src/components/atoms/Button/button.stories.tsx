import React from 'react';
import Button from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

export function ContainedButton() {
    const buttonLabel = text('text', 'ボタン');
    return <Button>{buttonLabel}</Button>;
}