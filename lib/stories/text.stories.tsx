import type { Meta, StoryObj } from "@storybook/react";
import Text from "../components/Atomos/Text";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    text: "Hellocdfds jsdfjklsd",
    type: "body1",
    fontWeight: "bold",
    customStyles: {color:'#00A5EF'}
  },
};

