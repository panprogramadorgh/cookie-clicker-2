/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/Generic/Header/Header.module.css";

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Cookie Clicker</h1>
      </Link>
    </header>
  );
};

export default Header;
