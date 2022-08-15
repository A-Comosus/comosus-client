const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
    'storybook-addon-next-router',
    'storybook-react-i18next',
  ],
  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      plugins: [new TsconfigPathsPlugin()],
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
