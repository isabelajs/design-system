import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Atomos/Card";

const meta: Meta<typeof Card> = {
  title: "Atomos/Card",
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Título de la tarjeta',
      control: 'text'
    },
    description: {
      description: 'Descripción de la tarjeta',
      control: 'text'
    },
    icon: {
      description: 'Icono de la tarjeta define la acción a realizar',
      control: 'text'
    },
    customStylesIcon: { 
      description: 'Estilos CSS personalizados para el icono',
      control: 'object'
    },
    onAction: {
      description: 'Función a ejecutar al hacer click',
    }
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Título de la tarjeta",
    description: "Descripción de la tarjeta",
    icon: "RiDeleteBinLine",
    customStylesIcon: {
      color: "#F17474",
      fontSize: "1rem",
    },
    onAction: () => console.log("Acción de la tarjeta"),
  },
};
