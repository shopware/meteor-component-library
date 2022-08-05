import { themes } from '@storybook/theming';
import '!style-loader!css-loader!sass-loader!./../src/components/assets/scss/all.scss';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import DeviceHelperPlugin from '../src/plugin/device-helper.plugin';
import { darkTheme, lightTheme } from './shopwareTheme';

Vue.use(VueI18n);
Vue.use(DeviceHelperPlugin);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {}
  }
});

export const decorators = [
  (story, context) => {
    return {
      components: { story },
      template: '<story />',
      i18n,
    }
  }
];

export const parameters = {
  darkMode: {
    // Override the default dark theme
    // dark: { ...themes.dark, appBg: 'black' },
    dark: darkTheme,
    // Override the default light theme
    light: lightTheme
  }
};