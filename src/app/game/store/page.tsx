/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/app/game/store/page.module.css";

interface Props {}

const Shop: FC<Props> = ({}) => {
  return (
    <div className={styles["store"]}>
      <h3>Shop</h3>
        {/* <article></article> */}
    </div>
  );
};

export default Shop;
