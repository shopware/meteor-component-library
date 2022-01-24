import SwPage from './sw-page.vue';
import SwCardView from '../sw-card-view/sw-card-view.vue';
import SwCard from '../sw-card/sw-card.vue';

export default {
  title: 'Components/structure/sw-page',
  component: SwPage,
  args: {
    showSmartBar: false,
    showSearchBar: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwPage, SwCardView, SwCard },
  template: '<sw-page v-bind="$props" style="height: 550px;"><template slot="content"><sw-card-view><sw-card title="Card1" large></sw-card><sw-card title="Card2" large></sw-card></sw-card-view></template></sw-page>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-page';
