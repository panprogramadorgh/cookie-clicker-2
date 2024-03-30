"use client";

/* Imports */

// react & nextjs
import { FC, createContext, useState } from "react";

// components

// libs

// utils

// types & interfaces
import type { GameStateValueI, GameStateI } from "@/utils/Contexts/Game";

// csss

export const GameContext = createContext<GameStateI | null>(null);

interface Props {
  children: React.ReactNode;
}

const GameContextProvider: FC<Props> = ({ children }) => {
  const gameState = useState<GameStateValueI>({
    cookies: 0,
    chips: 0,
  });
  return (
    <GameContext.Provider value={gameState}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
