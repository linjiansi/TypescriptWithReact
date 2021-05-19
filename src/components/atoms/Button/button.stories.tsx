import React from 'react';
import { ButtonComponent, UseCase } from './index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: ButtonComponent,
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

  return <ButtonComponent useCase={useCase}>{buttonLabel}</ButtonComponent>;
}
