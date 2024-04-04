"use client";

/* Imports */

// react & nextjs
import {
  FC,
  useState,
  useEffect,
  useContext,
  MouseEventHandler,
  useCallback,
} from "react";

// components
import Chip from "@/ui/components/Chip/Chip";

// libs
import { motion } from "framer-motion";

// utils
import { getRandomChipsPos, getRandom } from "@/utils/cookieRandom";
import { GameContext } from "@/ui/contexts/GameContext";

// types & interfaces
import type { ChipI } from "@/utils/definitions";

// css
import styles from "@/ui/components/Cookie/Cookie.module.css";

interface Props {
  decorative?: boolean;
  size: number;
  chipsAmount: {
    max: number;
    min: number;
  };
}

const Cookie: FC<Props> = ({ decorative = false, size, chipsAmount }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  });

  /* game context logic */
  const gameContext = useContext(GameContext);

  const addCookie = useCallback(() => {
    if (gameContext === null) return;
    const [_, setGameStateValue] = gameContext;
    setGameStateValue((prev) => {
      if (!prev) return null;
      return { ...prev, cookies: prev.cookies + 1 };
    });
  }, [gameContext]);

  const handleCookieClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      const grabCookieSound = new Audio("/sounds/cookie/grab_cookie.mp3");
      grabCookieSound.play();
      if (!decorative) return addCookie(); // Agregas una cookie si no es decorativo
    }, [addCookie]);

  /* ------- Chips state logic ------- */
  const [chips, setChips] = useState<ChipI[]>([]);

  const removeChipPerId = useCallback(
    (id: number) => {
      let newChipsPosition = [...chips];
      newChipsPosition = newChipsPosition.filter((chip) => {
        if (chip.id !== id) return chip;
      });
      setChips(newChipsPosition);
    },
    [chips]
  );

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

  const handleChipClick = useCallback(
    (event: MouseEvent, id: number) => {
      event.stopPropagation(); // Avoids the event for the cookie component
      const grabChipSound = new Audio("/sounds/cookie/grab_chip.mp3");
      grabChipSound.play();
      if (!gameContext) return;
      // Elimina la chip solo si no es decorativo
      if (!decorative) {
        const [_, setGameStateValue] = gameContext;
        setGameStateValue((prev) => {
          if (!prev) return null;
          return { ...prev, chips: prev.chips + 1 };
        });
        removeChipPerId(id); // Removes the chip
      }
    },
    [gameContext, removeChipPerId]
  );

  /* -------------------------- */

  // No se renderiza nada hasta el tiempo de reconcilizacion donde se establece el valor para el contexto
  if (!client) return null;
  else if (decorative) {
    // Sigue normalmente con el codigo
  } else if (!gameContext || !gameContext[0]) return null;
  return (
    <motion.div
      className={styles.cookie}
      onClick={handleCookieClick}
      whileTap={{
        scale: 0.8,
      }}
      initial={{ scale: 0.8, minWidth: size, minHeight: size }}
      animate={{
        scale: 1,
        rotate: 360,
      }}
      transition={{
        width: {},
        height: {},
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
            position={{ x: chip.pos.x, y: chip.pos.y }}
            handleClick={(event: any) => handleChipClick(event, chip.id)}
          />
        );
      })}
    </motion.div>
  );
};

export default Cookie;
