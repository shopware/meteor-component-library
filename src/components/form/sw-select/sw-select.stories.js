import SwSelect from './sw-select.vue';

export default {
  title: 'Components/form/sw-select',
  component: SwSelect,
  args: {
    label: 'Selectfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSelect },
  template: '<sw-select v-bind="$props"></sw-select>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-select';
