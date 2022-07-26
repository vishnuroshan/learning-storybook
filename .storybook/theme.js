import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'green',
  colorSecondary: 'red',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'grey',
  barSelectedColor: 'red',
  barBg: 'yellow',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'my storybook',
  brandUrl: 'https://github.com',
  brandImage: 'https://place-hold.it/350x150',
  brandTarget: '_self',
});
