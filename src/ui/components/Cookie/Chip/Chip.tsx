/* Imports */

// react & nextjs
import { FC, MouseEventHandler } from "react";

// components

// libs
import { motion } from "framer-motion";

// utils

// types & interfaces
import type { ChipPosI } from "@/utils/Cookie/types";

// css
import styles from "@/ui/components/Cookie/Chip/Chip.module.css";

interface Props {
  size: number;
  position: ChipPosI;
  handleClick: MouseEventHandler;
}

const Chip: FC<Props> = ({ size, position, handleClick }) => {
  return (
    <motion.div
      onClick={handleClick}
      className={styles.chip}
      whileTap={{
        scale: 0.7,
      }}
      initial={{
        scale: 0,
        width: size / 5,
        height: size / 5,
        top: `${position.yPos}%`,
        left: `${position.xPos}%`,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        scale: {
          duration: 0.2,
        },
      }}
    ></motion.div>
  );
};

export default Chip;
