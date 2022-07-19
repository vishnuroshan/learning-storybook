import React from 'react';
import Login from './Login';
// import { linkTo } from '@storybook/addon-links';
// import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

export default {
  title: 'Example/Login',
  component: Login,
  argTypes: {
    onsubmit: { action: 'clicked' },
  },
};

const Template = (args) => <Login {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Success = Template.bind({});
Success.args = {};

Success.play = async ({ args, canvasElement }) => {
  const userInput = screen.getByAltText('username', {
    selector: 'input',
  });
  const passwordInput = screen.getByAltText('password', {
    selector: 'input',
  });
  await userEvent.type(userInput, 'user1', {
    delay: 200,
  });
  await userEvent.type(passwordInput, 'pass1', {
    delay: 200,
  });

  const submitEvent = screen.getByRole('button', {
    selector: 'button',
  });

  setTimeout(async () => {
    await userEvent.click(submitEvent);
  }, 1500);
};

export const InvalidPassword = Template.bind({});
InvalidPassword.args = {};

InvalidPassword.play = async ({ args, canvasElement }) => {
  const userInput = screen.getByAltText('username', {
    selector: 'input',
  });
  const passwordInput = screen.getByAltText('password', {
    selector: 'input',
  });
  await userEvent.type(userInput, 'user1', {
    delay: 200,
  });
  await userEvent.type(passwordInput, 'pass2', {
    delay: 200,
  });

  const submitEvent = screen.getByRole('button', {
    selector: 'button',
  });

  setTimeout(async () => {
    await userEvent.click(submitEvent);
  }, 1500);
};

export const InvalidUsername = Template.bind({});
InvalidUsername.args = {};

InvalidUsername.play = async ({ args, canvasElement }) => {
  const userInput = screen.getByAltText('username', {
    selector: 'input',
  });
  const passwordInput = screen.getByAltText('password', {
    selector: 'input',
  });
  await userEvent.type(userInput, 'user33', {
    delay: 200,
  });
  await userEvent.type(passwordInput, 'pass1', {
    delay: 200,
  });

  const submitEvent = screen.getByRole('button', {
    selector: 'button',
  });

  setTimeout(async () => {
    await userEvent.click(submitEvent);
  }, 1500);
};
