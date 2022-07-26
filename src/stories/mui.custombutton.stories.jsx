import React from 'react';
import { UnstyledButtonsSimple } from '../components/CustomButton';

export default {
  title: 'MUI/Custom Button',
  component: UnstyledButtonsSimple,
  argTypes: {
    onClick: { action: 'onClick clicked' },
    color: {
      description: 'button color',
      defaultValue: 'success',
    },
    size: {
      defaultValue: 'medium',
    },
  },
};

const Template = (args) => <UnstyledButtonsSimple {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

export const StartIcon = Template.bind({});
