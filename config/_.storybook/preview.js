// import { BgWrapper } from './BgWrapper'
import React from 'react'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^(on|set)[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // (Story) => (
    //   <div className="bg-bodyBg-light dark:bg-bodyBg-dark h-[90vh] w-full p-2">
    //     <Story />
    //   </div>
    // ),
    (Story) =>
      React.createElement(
        'div',
        {
          className: 'bg-bodyBg-light dark:bg-bodyBg-dark h-[90vh] w-full p-2',
        },
        React.createElement(Story)
      ),
  ],
}

export default preview
