/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/ui/components/Card/Card.module.css";

interface Props {
  title: string;
  element: React.ReactNode;
  text: string | React.ReactNode;
  minCardContentHeight?: number;
}

const Card: FC<Props> = ({ title, element, text, minCardContentHeight }) => {
  return (
    <div className={styles["card"]}>
      <h2 className={styles["card__title"]}>{title}</h2>
      <div
        className={styles["card__content"]}
        style={
          minCardContentHeight
            ? {
                minHeight: minCardContentHeight,
              }
            : undefined
        }
      >
        <div className={styles["card__content__element-container"]}>
          {element}
        </div>
        <div className={styles["card__content__text-container"]}>
          {typeof text === "string" ? <p>{text}</p> : text}
        </div>
      </div>
    </div>
  );
};

export default Card;
