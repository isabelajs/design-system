import type { Meta, StoryObj } from "@storybook/react";
import Text from "../components/Atomos/Text";

/**
 * Componente Text que permite mostrar texto con diferentes estilos, tamaños y colores.
 * Puede ser utilizado para títulos (h1, h2) o texto regular (body1, body2).
 */
const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Texto a mostrar',
      control: 'text'
    },
    type: {
      description: 'Tipo de texto que define el tamaño y estilo',
      control: 'select',
      options: ['h1', 'h2', 'body1', 'body2']
    },
    fontWeight: {
      description: 'Peso de la fuente',
      control: 'select', 
      options: ['regular', 'medium', 'semibold', 'bold']
    },
    color: {
      description: 'Color del texto',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'error', 'success', 'inherit']
    },
    customStyles: {
      description: 'Estilos personalizados adicionales',
      control: 'object'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    text: "Este es un título H1",
    type: "h1",
    fontWeight: "bold",
    color: "primary"
  }
};

export const Heading2: Story = {
  args: {
    text: "Este es un título H2",
    type: "h2",
    fontWeight: "semibold",
    color: "secondary"
  }
};

export const Body1: Story = {
  args: {
    text: "Este es un texto body1 que muestra el estilo por defecto del componente",
    type: "body1",
    fontWeight: "regular",
    color: "inherit"
  }
};

export const Body2: Story = {
  args: {
    text: "Este es un texto body2 más pequeño",
    type: "body2",
    fontWeight: "medium",
    color: "primary"
  }
};

export const CustomStyled: Story = {
  args: {
    text: "Texto con estilos personalizados",
    type: "body1",
    fontWeight: "bold",
    customStyles: {
      color: '#00A5EF',
      textDecoration: 'underline'
    }
  }
};
