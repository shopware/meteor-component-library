import SwSegmentedControl from './sw-segmented-control.vue';

export default {
  title: 'Components/Navigation/sw-segmented-control',
  component: SwSegmentedControl,
  argTypes: {},
  args: {
    disableContext: true,
    actions: [
      {
        id: 'lableStart',
        label: 'X products selected',
        onClick: ({ checkboxValue }) => console.log('Checked Label E', checkboxValue),
        isPressed: true,
        hasCheckbox: true
      },
      'divider',
      {
        id: 'labelA',
        label: 'Label A',
        onClick: () => alert('Label A'),
        iconName: 'regular-tag',
        disabled: true,
      },
      'divider',
      {
        id: 'labelB',
        label: 'Label B',
        onClick: () => alert('Label B'),
        isPressed: true
      },
      {
        id: 'labelC',
        label: 'Label C',
        onClick: () => alert('Label C'),
        isPressed: false,
        isCritical: true
      },
      {
        id: 'labelD',
        label: 'Label D',
        onClick: () => alert('Label D'),
        isPressed: true,
        isCritical: true
      },
      {
        id: 'labelF',
        label: 'Label F',
        onClick: () => alert('Add the popover to the "options__${action.id}" slot and toggle them'),
        iconName: 'regular-calendar',
        options: true
      },
    ]
  }
};

const Template = (args, { argTypes }) => ({
  components: { SwSegmentedControl },
  props: Object.keys(argTypes),
  template: `
  <div style="max-width: 1000px; max-height: 400px; height: 500px; margin: 0 auto;">
    <sw-segmented-control
      v-bind="$props"
    >
      {{ $props.default}}
    </sw-segmented-control>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'sw-segmented-control';