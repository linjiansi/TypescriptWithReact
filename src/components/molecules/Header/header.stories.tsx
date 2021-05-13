import React from 'react';
import Header, { HeaderType } from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Header',
    component: Header,
};

export function story() {
    const headerType = text('headerType', 'main') as HeaderType;
    return <Header headerType={headerType}></Header>
}