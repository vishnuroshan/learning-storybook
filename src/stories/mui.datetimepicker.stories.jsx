import React from 'react';
import { BasicDateTimePicker } from '../components/Datetimepicker';

export default {
  title: 'MUI/DateTimePicker',
  component: BasicDateTimePicker,
  argTypes: {
    onClick: { action: 'onClick clicked' },
  },
};

const Template = (args) => <BasicDateTimePicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
