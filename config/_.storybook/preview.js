// import { BgWrapper } from './BgWrapper'
import React from 'react'
import { withThemeByClassName } from '@storybook/addon-themes'

function withDarkDecorator(Story) {
  return React.createElement(
    'div',
    {
      className: 'bg-bodyBg-light dark:bg-bodyBg-dark p-4',
    },
    React.createElement(Story)
  )
}

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
      defaultTheme: 'dark',
    }),
    withDarkDecorator,
  ],
  options: {
    storySort: {
      order: ['Arrangements', 'Components'],
    },
  },
}

export default preview
