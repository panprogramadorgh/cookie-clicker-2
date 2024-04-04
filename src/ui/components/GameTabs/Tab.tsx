/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils
import type { GameTab } from "@/utils/definitions";

// types & interfaces

// css
import styles from "@/ui/components/GameTabs/Tab.module.css";

type Props = GameTab & {
  active: boolean;
};

const Tab: FC<Props> = ({ name, path, active }) => {
  return (
    <Link
      href={path}
      className={`${styles["tab"]} ${active ? styles["active"] : ""}`}
    >
      {name}
    </Link>
  );
};

export default Tab;
