import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ema-3/react";

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/emanueljorge3ma.png',
    alt: 'Emanuel Jorge',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    src: undefined,
  }
}
