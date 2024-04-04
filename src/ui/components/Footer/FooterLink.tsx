/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";
import { FooterLink } from "@/utils/definitions";

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/Footer/FooterLink.module.css";

type Props = FooterLink;

const FooterLink: FC<Props> = ({ name, path, icon }) => {
  return (
    <Link href={path} className={styles["footer-link"]}>
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default FooterLink;
