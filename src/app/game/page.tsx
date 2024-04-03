"use client";

/* Imports */

// react & nextjs
import { FC, useContext, lazy } from "react";

// components
const Cookie = lazy(() => import("@/ui/components/Cookie/Cookie"));

// libs

// utils
import { GameContext } from "@/ui/contexts/GameContext";
import useGetWindowSize from "@/ui/hooks/useGetWindowSize";

// types & interfaces

// css
import styles from "@/app/game/page.module.css";
import { TwoDimension } from "@/utils/definitions";

const calculateCookieSize = (winSize: TwoDimension) => {
  if (winSize.x < 500) {
    return winSize.x * 0.9;
  } else if (winSize.x < 600) {
    return 350;
  } else if (winSize.x < 720) {
    return 400;
  } else {
    return 400;
  }
};

const Home: FC = () => {
  const gameContext = useContext(GameContext);
  const windowSize = useGetWindowSize();

  if (gameContext === null || gameContext[0] === null || windowSize === null)
    return null;
  const cookieSize = calculateCookieSize(windowSize);
  return (
    <>
      <div className={styles["cookie-container"]}>
        <Cookie
          key={gameContext[0].cookies + calculateCookieSize(windowSize)}
          size={cookieSize}
          chipsAmount={{ max: 6, min: 3 }}
        />
      </div>
    </>
  );
};

export default Home;
