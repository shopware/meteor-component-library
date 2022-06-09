import '!style-loader!css-loader!sass-loader!./../src/components/assets/scss/all.scss';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import DeviceHelperPlugin from '../src/plugin/device-helper.plugin';

Vue.use(VueI18n);
Vue.use(DeviceHelperPlugin);

const iconKitContext = require.context('@shopware-ag/meteor-icon-kit/icons', true, /svg$/);

iconKitContext.keys().forEach((item) => {
  const componentNameParts = item.split('.')[1].split('/');
  componentNameParts.shift();
  const componentName = componentNameParts.join('-');

  Vue.component(`icons-${componentName}`, {
    name: `icons-${componentName}`,
    functional: true,
    render(createElement, elementContext) {
      const data = elementContext.data;

      return createElement('span', {
        class: [data.staticClass, data.class],
        style: data.style,
        attrs: data.attrs,
        on: data.on,
        domProps: {
          innerHTML: iconKitContext(item),
        },
      });
    },
  });
});

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
