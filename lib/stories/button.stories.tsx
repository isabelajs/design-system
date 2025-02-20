import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Atomos/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Button",
    variant: "primary",
    disabled: false,

    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    variant: "secondary",
    disabled: false,
    onClick: () => console.log("Button"),
  },
};

export const Outline: Story = {
  args: {
    text: "Button",
    variant: "outline",
    disabled: false,
    onClick: () => console.log("Button"),
  },
};


export const CustomStyles: Story = {
  args: {
    text: "Button",
    variant: "primary",
    customStyles: {
      backgroundColor: "red",
    },
  },
};

