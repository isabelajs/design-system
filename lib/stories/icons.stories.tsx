import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../components/Atomos/Icons";

const meta: Meta<typeof Icon> = {
  title: "Atomos/Icons",
  component: Icon,
  tags: ['autodocs'], 
  argTypes: {
    icon: {
      description: 'Nombre del icono a mostrar',
      control: 'text'
    },
    customStyles: {
      description: 'Estilos CSS personalizados',
      control: 'object'
    },
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Ejemplo con diferentes iconos
export const IconVariants: Story = {
  args: {
    icon: "FaBeer",
  },
  parameters: {
    docs: {
      description: {
        story: 'Los iconos disponibles son los proporcionados por react-icons.'
      }
    }
  }
};

// Ejemplo con estilos personalizados
export const CustomStyledIcon: Story = {
  args: {
    icon: "FaBeer",
    customStyles: {
      color: "red",
      fontSize: "3rem"
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Los iconos pueden personalizarse usando la prop customStyles para modificar su color, tamaño y otras propiedades CSS.'
      }
    }
  }
};

// Ejemplo con icono clickeable
export const ClickableIcon: Story = {
  args: {
    icon: "FaBeer",
    onClick: () => console.log("Icono clickeado")
  }
};
