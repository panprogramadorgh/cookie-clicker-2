"use client";

/* Imports */

// react & nextjs
import { FC, createContext, useState, useEffect } from "react";

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
  const gameState = useState<GameStateValueI | null>(null);

  useEffect(() => {
    if (typeof window === undefined) return;
    const storage = window.localStorage.getItem("game");

    const initialGameState = (storage &&
      (JSON.parse(storage) as GameStateValueI)) || {
      cookies: 0,
      chips: 0,
    };
    const [_, setGameState] = gameState;
    setGameState(initialGameState);
  }, []);

  // Updates the localstorage
  useEffect(() => {
    if (!gameState || !gameState[0] || typeof window === undefined) return;
    const newStorage = JSON.stringify(gameState[0]);
    window.localStorage.setItem("game", newStorage);
  }, [gameState]);

  return (
    <GameContext.Provider value={gameState}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
