import SwCardView from './sw-card-view.vue';
import SwCard from '../sw-card/sw-card.vue';

export default {
  title: 'Components/structure/sw-card-view',
  component: SwCardView,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCardView, SwCard },
  template: '<sw-card-view v-bind="$props"><sw-card title="Card-1">Lorem ipsum dolor sit amet</sw-card><sw-card title="Card-2">Lorem ipsum dolor sit amet</sw-card></sw-card-view>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-card-view';
