import React from 'react';
import { BasicSwitch } from '../components/Switch';

export default {
  title: 'MUI/Switch',
  component: BasicSwitch,
  argTypes: {
    onClick: { action: 'onClick clicked' },
  },
};

const Template = (args) => <BasicSwitch {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
