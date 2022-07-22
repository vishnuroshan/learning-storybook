import React from 'react';
import { MUISelect } from '../components/Select';

export default {
  title: 'MUI/Select',
  component: MUISelect,
};

const Template = (args) => <MUISelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Select one',
  options: [
    { value: 'null', label: 'Select' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
};
