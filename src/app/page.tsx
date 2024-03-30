"use client";

/* Imports */

// react & nextjs
import { FC, useContext, lazy } from "react";

// components
// import Cookie from "@/ui/components/Cookie/Cookie";

// libs
import { motion } from "framer-motion";

// utils
import { GameContext } from "@/ui/contexts/Game";

// types & interfaces

// css
import styles from "./page.module.css";

const Cookie = lazy(() => import("@/ui/components/Cookie/Cookie"));

const Home: FC = () => {
  const gameContext = useContext(GameContext);

  if (gameContext === null) return;
  return (
    <>
      <header className={styles.header}>
        <h1>Cookie Clicker</h1>
      </header>
      <main className={styles.main}>
        <div className={styles["game-stats"]}>
          <p>
            Cookies: <span>{gameContext[0].cookies}</span>
          </p>
          <p>
            Chips: <span>{gameContext[0].chips}</span>
          </p>
        </div>
        <div className={styles["cookie-container"]}>
          <Cookie
            key={gameContext[0].cookies}
            size={400}
            chipsAmount={{ max: 6, min: 3 }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
