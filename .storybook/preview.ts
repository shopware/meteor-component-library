import type { Preview } from "@storybook/vue3";
import '~/src/components/assets/scss/all.scss';
import { darkTheme, lightTheme } from './shopwareTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "requiredFirst",
    },
    darkMode: {
      dark: { ...darkTheme },
      light: { ...lightTheme },
    }
  },
};

export default preview;
