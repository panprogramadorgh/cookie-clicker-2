/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/LocalGameMode/LocalGameMode.module.css";

interface Props {}

const Local: FC<Props> = ({}) => {
  return (
    <div className={styles.local}>
      <Link href="/game">Start game</Link>
    </div>
  );
};

export default Local;
