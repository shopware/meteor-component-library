import {
  within, fireEvent, findByRole, userEvent,
} from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { action } from '@storybook/addon-actions';
import SwButton from './sw-button.vue';

export default {
  title: 'Components/base/sw-button',
  component: SwButton,
  argTypes: {
    click: {
      action: 'click',
    },
    // default: {
    //   control: { type: 'text' },
    // },
    // variant: {
    //   control: { type: 'select' },
    //   options: ['primary', 'ghost', 'danger', 'ghost-danger', 'contrast', 'context'],
    // },
    // size: {
    //   control: { type: 'select' },
    //   options: ['x-small', 'small', 'large'],
    // },
    // link: {
    //   control: {
    //     type: 'text',
    //   },
    // },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SwButton },
  props: Object.keys(argTypes),
  template: `<sw-button @click="click" v-bind="$props">{{ $props.default}}</sw-button>`,
});

export const Default = Template.bind();
Default.args = {
  default: `Primary button`,
  variant: 'primary',
  size: 'small',
};
