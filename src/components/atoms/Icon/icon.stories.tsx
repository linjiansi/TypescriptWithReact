import React from 'react';
import  { Story } from '@storybook/react'
import { Icon } from './index'

export default {
    title: 'Icon',
    component: Icon,
};

const Template: Story = (args) => <Icon {...args} />;

export const LockIcon = Template.bind({});