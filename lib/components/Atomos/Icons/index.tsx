import { IconType } from "react-icons";
import React, { useEffect, useState } from "react";

export interface IconProps {
  icon: string;
  customStyles?: React.CSSProperties;
}

const iconModules = {
  bs: () => import('react-icons/bs'),
  ai: () => import('react-icons/ai'),
  bi: () => import('react-icons/bi'),
  gi: () => import('react-icons/gi'),
  fa: () => import('react-icons/fa'),
  tb: () => import('react-icons/tb'),
};

const Icon = ({ icon, customStyles }: IconProps) => {
  const [IconComponent, setIconComponent] = useState<IconType | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const prefix = icon.substring(0, 2).toLowerCase();
        const importModule = iconModules[prefix as keyof typeof iconModules];

        if (!importModule) {
          return;
        }

        const module = await importModule();
        const loadedIcon = (module as unknown as { [key: string]: IconType })[icon];

        if (!loadedIcon) {
          return;
        }

        setIconComponent(() => loadedIcon);
      } catch (error) {
        console.error('Error loading icon:', error);
      }
    };

    loadIcon();
  }, [icon]);

  if (!IconComponent) return null;
  return <IconComponent style={customStyles} />;
};

export default Icon;