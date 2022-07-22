import React from 'react';
import { MUICheckBox } from '../components/Checkbox';

export default {
  title: 'MUI/Checkbox',
  component: MUICheckBox,
  argTypes: {
    onClick: { action: 'onclick clicked' },
  },
};

const Template = (args) => <MUICheckBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'check box',
};
