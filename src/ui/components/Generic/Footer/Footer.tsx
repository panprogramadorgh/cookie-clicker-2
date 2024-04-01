/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/Generic/Footer/Footer.module.css";

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Proyecto desarrollado por{" "}
          <Link href="https://github.com/panprogramadorgh/cookie-clicker-2">
            @panprogramadorgh
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
