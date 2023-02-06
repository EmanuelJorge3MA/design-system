import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ema-3/react";

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ea inventore eius, sint maxime placeat repudiandae accusamus voluptas? Architecto at ratione ut deleniti nihil blanditiis distinctio, pariatur accusantium et sunt!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Ola ssds",
    as: 'strong',
  }
}