import React from 'react';
import { MUIButton } from '../components/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

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

export const StartIcon = Template.bind({});

StartIcon.args = {
  variant: 'contained',
  label: 'Button',
  size: 'medium',
  startIcon: <DeleteIcon />,
};

export const endIcon = Template.bind({});

endIcon.args = {
  variant: 'contained',
  label: 'Button',
  size: 'medium',
  endIcon: <SendIcon />,
};
