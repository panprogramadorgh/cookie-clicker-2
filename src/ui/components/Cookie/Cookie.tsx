"use client";

/* Imports */

// react & nextjs
import { FC, useState, useEffect, useContext, MouseEventHandler } from "react";

// components
import Chip from "@/ui/components/Cookie/Chip/Chip";

// libs
import { motion } from "framer-motion";

// utils
import { getRandomChipsPos, getRandom } from "@/utils/Cookie/random";
import { GameContext } from "@/ui/contexts/Game";

// types & interfaces
import type { ChipI } from "@/utils/Cookie/types";

// css
import styles from "@/ui/components/Cookie/Cookie.module.css";

interface Props {
  size: number;
  chipsAmount: {
    max: number;
    min: number;
  };
}

const Cookie: FC<Props> = ({ size, chipsAmount }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  });

  /* game context logic */
  const gameContext = useContext(GameContext);

  const addCookie = () => {
    if (gameContext === null) return;
    const [_, setGameStateValue] = gameContext;
    setGameStateValue((prev) => {
      return { ...prev, cookies: prev.cookies + 1 };
    });
  };

  const handleCookieClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    addCookie();
  };

  /* ------- Chips state logic ------- */
  const [chips, setChips] = useState<ChipI[]>([]);

  const removeChipPerId = (id: number) => {
    let newChipsPosition = [...chips];
    newChipsPosition = newChipsPosition.filter((chip) => {
      if (chip.id !== id) return chip;
    });
    setChips(newChipsPosition);
  };

  useEffect(() => {
    try {
      const chipsPos = getRandomChipsPos(
        getRandom(chipsAmount.max, chipsAmount.min), // Cantidad de chips en la cookie
        10, // Espacio entre chips (porciento de separacion respecto a las dimensiones de la cookie)
        80, // Define la posicion maxima en ambos ejes para posicionar una chip dentro de la cookie
        20 // Define la posicion minima en ambos ejes para posicionar una chip dentro de la cookie
      );
      setChips(chipsPos);
    } catch (error) {
      // En caso de error por no haber conseguido resolver una posicion dado que el algoritmo recursivo sobre paso la maxima cantidad de iteraciones, simplemente imprimes un texto.
      console.warn("Error obteniendo posicion de las chips");
    }
  }, []);

  const handleChipClick = (event: MouseEvent, id: number) => {
    event.stopPropagation(); // Avoids the event for the cookie component
    if (!gameContext) return;
    const [_, setGameStateValue] = gameContext;
    setGameStateValue((prev) => {
      return { ...prev, chips: prev.chips + 1 };
    });
    removeChipPerId(id); // Removes the chip
  };

  /* -------------------------- */

  // No se renderiza nada hasta el tiempo de reconcilizacion donde se establece el valor para el contexto
  if (!client || gameContext === null) return;
  return (
    <motion.div
      className={styles.cookie}
      onClick={handleCookieClick}
      whileTap={{
        scale: 0.8,
      }}
      initial={{ scale: 0.8, width: size, height: size }}
      animate={{
        scale: 1,
        rotate: 360,
      }}
      transition={{
        duration: 0.15,
        type: "spring",
        damping: 25,
        stiffness: 500,

        scale: {
          duration: 0.2,
        },
        rotate: {
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        },
      }}
    >
      {chips.map((chip) => {
        return (
          <Chip
            key={chip.id}
            size={size}
            position={{ xPos: chip.pos.xPos, yPos: chip.pos.yPos }}
            handleClick={(event: any) => handleChipClick(event, chip.id)}
          />
        );
      })}
    </motion.div>
  );
};

export default Cookie;
