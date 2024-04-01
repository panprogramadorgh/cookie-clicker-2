/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";
import Image from "next/image";

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
      <Image
        width={65}
        height={65}
        src="/imgs/cookie.png"
        alt="image of a cookie"
      />
    </header>
  );
};

export default Header;
