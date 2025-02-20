import * as bsIcons from "react-icons/bs";
import * as aiIcons from "react-icons/ai";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import { IconType } from "react-icons";

export interface IconProps {
  icon: string;
  customStyles?: React.CSSProperties;
}

const Icon = ({ icon, customStyles }: IconProps) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Bs", bsIcons);
    iconsMap.set("Ai", aiIcons);
    iconsMap.set("Bi", biIcons);
    iconsMap.set("Gi", giIcons);
    iconsMap.set("Fa", faIcons);
    iconsMap.set("Tb", tbIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons: any = getIcon(icon);
  const TheIcon: IconType = icons[icon];

  return <TheIcon style={customStyles} />;
};

export default Icon;
