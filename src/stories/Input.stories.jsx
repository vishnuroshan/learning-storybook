import React from 'react';
import { Input } from './Input';
import { expect } from '@storybook/jest';
import { screen, userEvent, waitFor } from '@storybook/testing-library';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    onClick: { action: 'clicked' },
    type: {
      defaultValue: 'text',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'enter text here',
  label: 'name',
  onClick: function (event) {
    console.log('clicked', event);
  },
};
export const Password = Template.bind({});
Password.args = {
  alt: 'password',
  type: 'password',
  placeholder: 'enter text here',
  label: 'password',
  onClick: function (event) {
    console.log('clicked', event);
  },
};
Password.play = async ({ args, canvasElement }) => {
  const emailInput = screen.getByAltText('password', {
    selector: 'input',
  });
  await userEvent.type(emailInput, 'some example password', {
    delay: 100,
  });
};
export const Email = Template.bind({});
Email.args = {
  type: 'email',
  id: 'email-text',
  placeholder: 'enter text here',
  label: 'email',
  onClick: function (event) {
    console.log('clicked', event);
  },
};

Email.play = async ({ args, canvasElement }) => {
  const emailInput = screen.getByRole('textbox', {
    selector: 'input',
  });
  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  await waitFor(() => expect(args.onClick));
};
