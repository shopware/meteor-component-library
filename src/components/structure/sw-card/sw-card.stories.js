import SwCard from './sw-card.vue';

export default {
  title: 'Components/structure/sw-card',
  component: SwCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCard },
  template: '<sw-card v-bind="$props"></sw-card>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-card';
