import SwContainer from './sw-container.vue';

export default {
  title: 'Components/structure/sw-container',
  component: SwContainer,
  args: {
    columns: '1fr 1fr',
    rows: '',
    gap: '',
    justify: 'stretch',
    align: 'stretch',
  },
  argTypes: {
    justify: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'stretch', 'left', 'right'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'stretch'],
      },
    },
    breakpoints: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwContainer },
  template: '<sw-container v-bind="$props"><div>Left content</div><div>Right content</div></sw-container>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-container';
