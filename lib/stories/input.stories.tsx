import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Atomos/Input";

const meta: Meta<typeof Input> = {
  title: "Atomos/Input",
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Tipo de input (text, password, email)',
      control: 'select',
      options: ['text', 'password', 'email'],
      defaultValue: 'text'
    },
    placeholder: {
      description: 'Texto que se muestra cuando el input está vacío',
      control: 'text'
    },
    value: {
      description: 'Valor actual del input',
      control: 'text'
    },
    onChange: {
      description: 'Función que se ejecuta cuando cambia el valor del input',
      action: 'changed'
    },
    isValid: {
      description: 'Muestra un ícono de check cuando el valor es válido',
      control: 'boolean'
    },
    error: {
      description: 'Mensaje de error que se muestra debajo del input. También cambia el estilo del input a estado de error',
      control: 'text'
    },
    disabled: {
      description: 'Deshabilita la interacción con el input y aplica estilos visuales de deshabilitado',
      control: 'boolean'
    },
    customStyles: {
      description: 'Objeto de estilos CSS en línea para personalizar el contenedor del input',
      control: 'object'
    },
    name: {
      description: 'Nombre del input para formularios',
      control: 'text'
    },
    id: {
      description: 'ID único del input. Si no se proporciona, usa el name como ID',
      control: 'text'
    },
    required: {
      description: 'Marca el campo como obligatorio para validación de formularios',
      control: 'boolean',
      defaultValue: false
    },
    maxLength: {
      description: 'Número máximo de caracteres permitidos',
      control: 'number'
    },
    minLength: {
      description: 'Número mínimo de caracteres requeridos',
      control: 'number'
    },  
    pattern: {
      description: 'Expresión regular para validar el valor del input',
      control: 'text'
    },
    autoComplete: {
      description: 'Controla el comportamiento del autocompletado del navegador',      
      control: 'text',
      defaultValue: 'off'
    },
    className: {
      description: 'Clase CSS adicional para el contenedor del input',
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: 'text',
    placeholder: "Ingresa un texto",
    name: "text-input"
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: "Ingresa tu contraseña",
    name: "password-input"
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Ingresa un valor", 
    error: "Este campo es requerido",
    name: "error-input"
  },
};

export const WithValidation: Story = {
  args: {
    placeholder: "Ingresa un valor",
    isValid: true,
    value: "Valor válido",
    name: "valid-input"
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Campo deshabilitado",
    disabled: true,
    name: "disabled-input"
  },
};
