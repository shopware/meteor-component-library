import SwCardSection from './sw-card-section.vue';
import SwCard from '../sw-card/sw-card.vue';

export default {
  title: 'Components/structure/sw-card-section',
  component: SwCardSection,
  args: {
    secondary: false,
    slim: false,
    divider: 'bottom',
  },
  argTypes: {
    divider: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCardSection, SwCard },
  template: '<sw-card><sw-card-section v-bind="$props">Section 1</sw-card-section><sw-card-section>Section 2</sw-card-section></sw-card>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-card-section';
