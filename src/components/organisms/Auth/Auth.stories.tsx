import React from 'react';
import Auth, { AuthType } from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Auth',
    component: Auth,
    decorators: [withKnobs],
};

export function story() {
    const authType = text('authType', 'login') as AuthType
    return <Auth authType={authType}></Auth>
}