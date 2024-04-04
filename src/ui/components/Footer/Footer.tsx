/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";
import FooterLink from "@/ui/components/Footer/FooterLink";

// libs

// utils
import footerLinks from "@/utils/footerLinks";

// types & interfaces

// css
import styles from "@/ui/components/Footer/Footer.module.css";

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles["footer__container"]} ${styles["footer__social-media-container"]}`}
      >
        <h4>Follow me on social media</h4>
        <ul className={`${styles["list"]} ${styles["footer__social-media"]}`}>
          {footerLinks.map((link) => (
            <FooterLink key={link.name} {...link} />
          ))}
        </ul>
      </div>
      <div
        className={`${styles["footer__container"]} ${styles["footer__credits-container"]}`}
      >
        <p>
          Project repository{" "}
          <FooterLink
            name="panprogramadorgh/cookie-clicker-2"
            path="https://github.com/panprogramadorgh/cookie-clicker-2"
            icon={footerLinks[0].icon}
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
