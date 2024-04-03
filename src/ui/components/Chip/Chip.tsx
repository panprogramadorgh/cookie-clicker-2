/* Imports */

// react & nextjs
import { FC, MouseEventHandler } from "react";

// components

// libs
import { motion } from "framer-motion";

// utils

// types & interfaces
import type { TwoDimension } from "@/utils/definitions";

// css
import styles from "@/ui/components/Chip/Chip.module.css";

interface Props {
  position: TwoDimension;
  handleClick: MouseEventHandler;
}

const Chip: FC<Props> = ({ position, handleClick }) => {
  return (
    <motion.div
      onClick={handleClick}
      className={styles.chip}
      whileTap={{
        scale: 0.7,
      }}
      initial={{
        scale: 0,
        top: `${position.y}%`,
        left: `${position.x}%`,
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
