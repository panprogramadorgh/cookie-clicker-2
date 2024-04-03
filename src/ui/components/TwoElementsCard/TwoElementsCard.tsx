"use client";

/* Imports */

// react & nextjs
import { FC, useEffect, useState } from "react";

// components

// libs
import { motion } from "framer-motion";

// utils
import { twoElementCardVariants } from "@/utils/framerMotionVariants";

// types & interfaces

// css
import cardStyles from "@/ui/components/Card/Card.module.css";
import styles from "@/ui/components/TwoElementsCard/TwoElementsCard.module.css";

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

  const calculateVariant = (targetGameMode: GameModes) => {
    return targetGameMode === gameMode
      ? twoElementCardVariants.active
      : twoElementCardVariants.unactive;
  };

  const handleClick = (targetGameMode: GameModes): void => {
    setGameMode(targetGameMode);
  };

  const calculateVisibleElement = () => {
    return gameMode === GameModes.local
      ? firstElement.element
      : seccondElement.element;
  };

  return (
    <div className={cardStyles["card"]}>
      <h2 className={cardStyles["card__title"]}>{title}</h2>
      <div className={cardStyles["card__content"]}>
        <div className={cardStyles["card__content__element-container"]}>
          {calculateVisibleElement()}
        </div>
        <div className={cardStyles["card__content__text-container"]}>
          <motion.article
            className={styles["card__content__text-container__article"]}
            onClick={() => handleClick(GameModes.local)}
            initial="hidden"
            animate="visible"
            variants={calculateVariant(GameModes.local)}
          >
            {typeof firstElement.text === "string" ? (
              <p>{firstElement.text}</p>
            ) : (
              firstElement.text
            )}
          </motion.article>
          <motion.article
            className={styles["card__content__text-container__article"]}
            onClick={() => handleClick(GameModes.worldWide)}
            initial="hidden"
            animate="visible"
            variants={calculateVariant(GameModes.worldWide)}
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
