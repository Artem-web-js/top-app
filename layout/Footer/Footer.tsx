import React from "react";
import cn from "classnames";
import { format } from "date-fns";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...rest }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...rest}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
};
