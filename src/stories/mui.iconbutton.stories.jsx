import React from 'react';
import { BasicIconButton } from '../components/IconButton';

export default {
  title: 'MUI/IconButton',
  component: BasicIconButton,
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

const Template = (args) => <BasicIconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
