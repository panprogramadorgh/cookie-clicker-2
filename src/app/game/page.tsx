"use client";

/* Imports */

// react & nextjs
import { FC, useContext, lazy } from "react";

// components
import Cookie from "@/ui/components/Cookie/Cookie";
import Header from "@/ui/components/Generic/Header/Header";

// libs

// utils
import { GameContext } from "@/ui/contexts/Game";
import useGetWindowSize from "@/ui/hooks/useGetWindowSize";

// types & interfaces

// css
import styles from "@/app/game/page.module.css";

const calculateCookieSize = (winWidth: number) => {
  if (winWidth > 800) {
    return 500;
  } else if (winWidth > 600) {
    return 450;
  } else if (winWidth > 500) {
    return 350;
  } else if (winWidth > 400) {
    return 300;
  } else {
    return 250;
  }
};

const getCookieKeyHash = (
  cookiesAmount: number,
  winWidth: number
): `${number}-${number}` => {
  const cookieWidth = calculateCookieSize(winWidth);
  const hash: `${number}-${number}` = `${cookiesAmount}-${cookieWidth}`;
  return hash;
};

const Home: FC = () => {
  const gameContext = useContext(GameContext);
  const windowSize = useGetWindowSize();

  if (gameContext === null || gameContext[0] === null || windowSize === null)
    return null;
  const cookieSize = calculateCookieSize(windowSize.x);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles["game-stats"]}>
          <p className={styles.cookies}>
            <span>{gameContext[0].cookies}</span>
          </p>
          <p className={styles.chips}>
            <span>{gameContext[0].chips}</span>
          </p>
        </div>
        <div className={styles["cookie-container"]}>
          <Cookie
            key={getCookieKeyHash(gameContext[0].cookies, windowSize.x)}
            size={cookieSize}
            chipsAmount={{ max: 6, min: 3 }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
