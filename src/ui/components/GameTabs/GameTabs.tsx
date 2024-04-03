/* Imports */

// react & nextjs
import { FC } from "react";
import Link from "next/link";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/GameTabs/GameTabs.module.css";

interface Props {}

const BuyButton: FC<Props> = ({}) => {
  return (
    <section className={styles["game-tabs"]}>
      <Link href="/game/">Cookie</Link>
      <Link href="/game/store">Store</Link>
    </section>
  );
};

export default BuyButton;
