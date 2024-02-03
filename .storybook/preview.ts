import type { Preview } from "@storybook/html";
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      withThemeByDataAttribute({
        themes: {
          light: "light",
          dark: "dark",
          system: "system",
        },
        defaultTheme: "light",
        parentSelector: "html",
        attributeName: "data-bs-theme",
      }),
    ],
  },
};

export default preview;
