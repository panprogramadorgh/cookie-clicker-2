"use client";

/* Imports */

// react & nextjs
import { FC, useState, useEffect } from "react";

// components

// libs

// utils
import { motion } from "framer-motion";
import phrases from "@/utils/Home/phrases";
import { phrasesVariants } from "@/utils/Home/framerMotionVariants";

// types & interfaces

// css
import styles from "@/ui/components/Home/Phrases/Phrases.module.css";

function getPhraseByIndex(index: number): (typeof phrases)[0] {
  return phrases[index];
}

interface Props {
  switchDelay: number;
}

const Phrases: FC<Props> = ({ switchDelay }) => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);

  useEffect(() => {
    const handleSwitch = () =>
      setPhraseIndex((prev) => {
        let next = prev + 1;
        if (next > phrases.length - 1) next = 0;
        return next;
      });
    const switchInterva = setInterval(handleSwitch, switchDelay);
    return () => {
      clearInterval(switchInterva);
    };
  }, []);

  return (
    <motion.div
      key={phraseIndex}
      className={styles["phrase"]}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={phrasesVariants}
    >
      <h2>
        <span>{getPhraseByIndex(phraseIndex)}</span>
      </h2>
    </motion.div>
  );
};

export default Phrases;
