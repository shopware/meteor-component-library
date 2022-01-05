import SwAddress from './sw-address.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Shopware/base/sw-address',
  component: SwAddress,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwAddress },
  template: '<sw-address v-bind="$props"></sw-address>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  headline: 'Address',
  address: {
    salutation: 'Mister',
    title: 'Doctor',
    firstName: 'John',
    lastName: 'Doe',
    street: 'Main St 123',
    zipcode: '12456',
    city: 'Anytown',
    country: { name: 'Germany' },
  },
};
