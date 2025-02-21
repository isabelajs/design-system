import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Atomos/Button";

// Configuración del componente Button para Storybook
const meta: Meta<typeof Button> = {
  title: "Atomos/Button", // Organiza el componente en la categoría Atomos
  component: Button,
  tags: ['autodocs'], // Genera documentación automática
  argTypes: {
    variant: {
      description: 'Estilo visual del botón',
      options: ['primary', 'secondary', 'outline'],
      control: { type: 'radio' }
    },
    text: {
      description: 'Texto que se muestra en el botón',
      control: 'text'
    },
    disabled: {
      description: 'Deshabilita el botón',
      control: 'boolean'
    },
    startIcon: {
      description: 'Icono que se muestra al inicio del botón',
      control: 'text'
    },
    endIcon: {
      description: 'Icono que se muestra al final del botón', 
      control: 'text'
    },
    customStyles: {
      description: 'Estilos CSS personalizados',
      control: 'object'
    },
    size:{
      description: 'Tamaño del botón',
      options: ['small', 'large'],
      control: { type: 'radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// Variante primaria del botón
export const Primary: Story = {
  args: {
    text: "Botón Primario y Pequeño",
    variant: "primary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Click en botón primario"),
  },
};

// Variante secundaria del botón
export const Secondary: Story = {
  args: {
    text: "Botón Secundario y Largo", 
    variant: "secondary",
    disabled: false,
    size: "large",
    onClick: () => console.log("Click en botón secundario"),
  },
};

// Variante outline del botón
export const Outline: Story = {
  args: {
    text: "Botón Outline",
    variant: "outline", 
    disabled: false,
    onClick: () => console.log("Click en botón outline"),
  },
};

// Ejemplo de botón con estilos personalizados
export const CustomStyles: Story = {
  args: {
    text: "Botón Personalizado",
    variant: "primary",
    customStyles: {
      backgroundColor: "red",
      width: "200px"
    },
  },
};

// Ejemplo de botón con iconos
export const WithIcons: Story = {
  args: {
    text: "Botón con Iconos",
    variant: "primary",
    startIcon: "BsArrowLeft",
    endIcon: "BsArrowRight"
  }
};

// Ejemplo de botón deshabilitado
export const Disabled: Story = {
  args: {
    text: "Botón Deshabilitado",
    variant: "primary",
    disabled: true
  }
};
