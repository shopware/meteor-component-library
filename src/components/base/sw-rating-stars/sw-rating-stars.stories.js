import SwRatingStars from './sw-rating-stars.vue';

export default {
  title: 'Components/base/sw-rating-stars',
  component: SwRatingStars,
  args: {
    value: 5,
    maxStars: 5,
    iconSize: 16,
    displayFractions: 4,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwRatingStars },
  template: '<sw-rating-stars v-bind="$props"></sw-rating-stars>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-rating-stars';
