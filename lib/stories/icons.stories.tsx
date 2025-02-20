import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../components/Atomos/Icons";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "FaBeer",
    customStyles: {
      color: "blue",
      fontSize: "2rem",
    },
  },
};