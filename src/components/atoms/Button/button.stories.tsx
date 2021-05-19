import React from 'react';
import Button, { UseCase } from './index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export function story() {
  const buttonLabel = text('text', 'ボタン');
  const label = 'useCase';
  const option = {
    Auth: 'auth',
    Main: 'main',
  };
  const defaultValue = 'auth';

  const useCase = select(label, option, defaultValue) as UseCase;

  return <Button useCase={useCase}>{buttonLabel}</Button>;
}
