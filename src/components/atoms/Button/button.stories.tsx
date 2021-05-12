import React from 'react';
import Button, { UseCase } from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

export function ContainedButton() {
    const buttonLabel = text('text', 'ボタン');
    const useCase = text('color', 'auth') as UseCase;
    return <Button useCase={useCase}>{buttonLabel}</Button>;
}