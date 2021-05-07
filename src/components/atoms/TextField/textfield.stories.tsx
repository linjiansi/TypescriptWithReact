import React from 'react';
import { Story } from '@storybook/react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Field from './index'

export default {
    title: 'TextField',
    component: Field
};

// const Template: Story = (args) => <Field {...args} />;
// export const TextField = Template.bind({});

export function TextField() {
    // const defaultValue = "default"
    // const type = select('variant', defaultValue)
    return <Field></Field>;
}

