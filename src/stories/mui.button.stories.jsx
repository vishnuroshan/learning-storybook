import React from 'react';
import { MUIButton } from '../components/Button';

export default {
  title: 'MUI/Button',
  component: MUIButton,
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

const Template = (args) => <MUIButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'contained',
  label: 'Button',
  size: 'medium',
};
