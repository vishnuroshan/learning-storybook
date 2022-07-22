import React from 'react';
import { BasicDatePicker } from '../components/Datepicker';

export default {
  title: 'MUI/DatePicker',
  component: BasicDatePicker,
  argTypes: {
    onClick: { action: 'onClick clicked' },
  },
};

const Template = (args) => <BasicDatePicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
