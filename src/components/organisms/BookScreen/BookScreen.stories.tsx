import React from 'react';
import BookScreen, { BookMode } from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'BookScreen',
    component: BookScreen,
    decorators: [withKnobs],
}

export function Story() {
    const bookMode = text('bookMode', 'edit') as BookMode;
    return <BookScreen bookMode={bookMode}></BookScreen>
}