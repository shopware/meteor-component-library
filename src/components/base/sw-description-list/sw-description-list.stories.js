import SwDescriptionList from './sw-description-list.vue';

export default {
  title: 'Components/base/sw-description-list',
  component: SwDescriptionList,
  args: {
    grid: '1fr',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwDescriptionList },
  template: '<sw-description-list v-bind="$props"><dt>Product name</dt><dd>Example product</dd><dt>Price</dt><dd>$4.99</dd><dt>Description</dt><dd>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</dd></sw-description-list>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-description-list';
