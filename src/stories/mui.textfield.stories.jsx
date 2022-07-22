import React from 'react';
import { MUITextField } from '../components/Textfield';
// import PropTypes from 'prop-types';
// import TextField from '@mui/material/TextField/TextField';

export default {
  title: 'MUI/TextField',
  // component: TextField,
  component: MUITextField,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick clicked' },
    onChange: { action: 'onChange clicked' },
    defaultValue: { control: 'text' },
    varient: {
      description: 'button color',
      defaultValue: 'success',
    },
    size: {
      defaultValue: 'medium',
    },
  },
};

const Template = (args) => <MUITextField {...args} />;
// const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
  label: 'Name',
  InputProps: {
    readOnly: false,
  },
  InputLabelProps: {
    shrink: true,
  },
};

export const Search = Template.bind({});
Search.args = {
  variant: 'outlined',
  label: 'Search',
  type: 'search',
  InputProps: {
    readOnly: false,
  },
  InputLabelProps: {
    shrink: true,
  },
};

export const Number = Template.bind({});
Number.args = {
  variant: 'outlined',
  label: 'Number',
  type: 'number',
  InputProps: {
    readOnly: false,
  },
  InputLabelProps: {
    shrink: true,
  },
};

export const Password = Template.bind({});
Password.args = {
  variant: 'outlined',
  label: 'Password',
  type: 'password',
  InputProps: {
    readOnly: false,
  },
  InputLabelProps: {
    shrink: true,
  },
};
