import SwAddress from './sw-address.vue';

export default {
  title: 'Components/base/sw-address',
  component: SwAddress,
  args: {
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
    showEditButton: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwAddress },
  template: '<sw-address v-bind="$props"></sw-address>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-address';
