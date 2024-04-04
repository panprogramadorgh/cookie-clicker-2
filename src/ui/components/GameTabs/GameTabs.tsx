"use client";

/* Imports */

// react & nextjs
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Tab from "@/ui/components/GameTabs/Tab";

// libs

// utils
import gameTabs from "@/utils/gameTabsInfo";

// types & interfaces

// css
import styles from "@/ui/components/GameTabs/GameTabs.module.css";

interface Props {}

const GameTabs: FC<Props> = ({}) => {
  const pathname = usePathname();
  return (
    <section className={styles["game-tabs"]}>
      {gameTabs.map((tab) => (
        <Tab key={tab.path} {...tab} active={pathname === tab.path} />
      ))}
    </section>
  );
};

export default GameTabs;
