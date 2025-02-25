// https://storybook.js.org/docs/react/faq#how-do-i-fix-module-resolution-in-special-environments
const path = require('path')

const wrapForPnp = (packageName) =>
  path.dirname(require.resolve(path.join(packageName, 'package.json')))

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    wrapForPnp('@storybook/addon-links'),
    wrapForPnp('@storybook/addon-essentials'),
    wrapForPnp('@storybook/addon-themes'),
    // See https://github.com/storybookjs/addon-styling-webpack/issues/1
    {
      name: wrapForPnp('@storybook/addon-styling-webpack'),

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: wrapForPnp('@storybook/react-webpack5'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}

module.exports = config
