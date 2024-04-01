"use client";

/* Imports */

// react & nextjs
import { FC, useEffect, useState } from "react";

// components

// libs
import { motion } from "framer-motion";

// utils
import { twoElementCardVariants } from "@/utils/Home/framerMotionVariants";

// types & interfaces

// css
import cardStyles from "@/ui/components/Home/Card/Card.module.css";
import styles from "@/ui/components/Home/TwoElementsCard/TwoElementsCard.module.css";

const enum GameModes {
  local,
  worldWide,
}

interface Props {
  title: string;
  firstElement: {
    element: React.ReactNode;
    text: string | React.ReactNode;
  };
  seccondElement: {
    element: React.ReactNode;
    text: string | React.ReactNode;
  };
}

const GameModesCard: FC<Props> = ({ title, firstElement, seccondElement }) => {
  const [gameMode, setGameMode] = useState<GameModes | null>(null);

  useEffect(() => {
    setGameMode(GameModes.local);
  }, []);

  return (
    <div className={cardStyles["card"]}>
      <h2 className={cardStyles["card__title"]}>{title}</h2>
      <div className={cardStyles["card__content"]}>
        <div className={cardStyles["card__content__element-container"]}>
          {gameMode === GameModes.local
            ? firstElement.element
            : seccondElement.element}
        </div>
        <div className={cardStyles["card__content__text-container"]}>
          <motion.article
            className={styles["card__content__text-container__article"]}
            onClick={() => setGameMode(GameModes.local)}
            initial="hidden"
            animate="visible"
            variants={
              gameMode === GameModes.local
                ? twoElementCardVariants.active
                : twoElementCardVariants.unactive
            }
          >
            {typeof firstElement.text === "string" ? (
              <p>{firstElement.text}</p>
            ) : (
              firstElement.text
            )}
          </motion.article>
          <motion.article
            className={styles["card__content__text-container__article"]}
            onClick={() => setGameMode(GameModes.worldWide)}
            initial="hidden"
            animate="visible"
            variants={
              gameMode === GameModes.worldWide
                ? twoElementCardVariants.active
                : twoElementCardVariants.unactive
            }
          >
            {typeof seccondElement.text === "string" ? (
              <p>{seccondElement.text}</p>
            ) : (
              seccondElement.text
            )}
          </motion.article>
        </div>
      </div>
    </div>
  );
};

export default GameModesCard;
