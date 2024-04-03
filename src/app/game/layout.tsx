/* Imports */

// react & nextjs
import { FC } from "react";

// components
import GameTabs from "@/ui/components/GameTabs/GameTabs";
import Header from "@/ui/components/Header/Header";
import Monitor from "@/ui/components/Monitor/Monitor";

// libs

// utils
import GameContextProvider from "@/ui/contexts/GameContext";

// types & interfaces

// css
import styles from "@/app/game/page.module.css";

interface Props {
  children: React.ReactNode;
}

const GameLayout: FC<Props> = ({ children }) => {
  return (
    <GameContextProvider>
      <Header />
      <main className={styles.main}>
        <GameTabs />
        <Monitor />
        <section>{children}</section>
      </main>
    </GameContextProvider>
  );
};

export default GameLayout;
