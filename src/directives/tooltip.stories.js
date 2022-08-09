import SwIcon from '../components/icons-media/sw-icon/sw-icon.vue';
import TooltipDirective from './tooltip.directive';

export default {
  title: 'Directives/Tooltip',
  component: SwIcon,
  args: {
    message: 'Help text',
    width: 200,
    showDelay: 100,
    hideDelay: 100,
    disabled: false,
    appearance: 'dark',
    showOnDisabledElements: false,
  },
  argTypes: {
    appearance: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
    /**
     * Disable name, color and decorative because they
     * are automatically generated and don't belong to
     * the directive
     */
    name: {
      table: {
        disable: true,
      }
    },
    color: {
      table: {
        disable: true,
      }
    },
    decorative: {
      table: {
        disable: true,
      }
    },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwIcon },
  directives: {
    tooltip: TooltipDirective,
  },
  template: `<div>
    <sw-icon
      name="regular-question-circle"
        v-tooltip="{
        ...$props
      }">
    </sw-icon>
  </div>`,
});

export const Default = Template.bind({});
Default.storyName = 'Tooltip';
