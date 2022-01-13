import '!style-loader!css-loader!sass-loader!./../src/components/assets/scss/all.scss';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {}
  }
});

export const decorators = [(story) => ({
  components: {story},
  template: '<story />',
  i18n,
})];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
