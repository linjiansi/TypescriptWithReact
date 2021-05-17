import React from 'react';
import Auth, { AuthType } from './index';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Auth',
  component: Auth,
  decorators: [withKnobs],
};

export function story() {
  const label = 'authType';
  const option = {
    Login: 'login',
    SignUp: 'signUp',
  };
  const defaultValue = 'login';

  const authType = select(label, option, defaultValue) as AuthType;

  return <Auth authType={authType}></Auth>;
}
