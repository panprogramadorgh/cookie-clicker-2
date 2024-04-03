export const twoElementCardVariants = {
  active: {
    hidden: {
      scale: 0.9,
      backgroundColor: "var(--background)",
    },
    visible: {
      scale: 1,
      backgroundColor: "var(--background-alt)",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  },
  unactive: {
    hidden: {
      scale: 1,
      backgroundColor: "var(--background-alt)",
    },
    visible: {
      scale: 0.9,
      backgroundColor: "var(--background)",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  },
};

export const phrasesVariants = {
  hidden: { y: 15, scale: 0.95, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 50,
      stiffness: 700,
    },
  },
  exit: { y: -15, scale: 0.95, opacity: 0 },
};
