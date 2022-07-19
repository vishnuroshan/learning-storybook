import React from 'react';
import { Home } from './Home';

export default {
  title: 'Example/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomeScreen = Template.bind({});
HomeScreen.args = {
  title: 'WELCOME TO HOME',
};
