import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: 'grau',
    values: [
      {
        name: 'blc',
        value: '#012',
      },
      {
        name: 'grau',
        value: '#272829',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
};
