import { SetStateAction, Dispatch } from "react";

export interface GameStateValueI {
  cookies: number;
  chips: number;
}

export type GameStateI = [
  GameStateValueI,
  Dispatch<SetStateAction<GameStateValueI>>
];
