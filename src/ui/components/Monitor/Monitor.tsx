"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components

// libs

// utils
import { GameContext } from "@/ui/contexts/GameContext";

// types & interfaces

// css
import styles from "@/ui/components/Monitor/Monitor.module.css";

interface Props {}

const Monitor: FC<Props> = ({}) => {
  const gameContext = useContext(GameContext);
  if (!gameContext || !gameContext[0]) return null;
  return (
    <div className={styles["monitor"]}>
      <div className={`${styles.stat}`.trim()}>
        <p>Cookies</p>
        <span>{gameContext[0].cookies}</span>
      </div>
      <div className={` ${styles.stat}`.trim()}>
        <p>Chips</p>
        <span>{gameContext[0].chips}</span>
      </div>
    </div>
  );
};

export default Monitor;
