import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";
//  está garantindo que o componente Avatar possa aceitar todas as propriedades que um HTMLImageElement
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  //  na API do DOM, que representa um elemento html <img>
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
