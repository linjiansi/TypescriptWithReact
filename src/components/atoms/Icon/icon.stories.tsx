import React from 'react';
import { Story } from '@storybook/react';
import { IconComponent } from './index';

export default {
  title: 'Icon',
  component: IconComponent,
};

const Template: Story = (args) => <IconComponent {...args} />;

export const story = Template.bind({});
