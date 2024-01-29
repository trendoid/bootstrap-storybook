import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-designs'
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableWhatsNewNotifications: true
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    if(configType === "PRODUCTION") {
      return {...config, base: './'};
    }
    return config;
  }
};
export default config;
