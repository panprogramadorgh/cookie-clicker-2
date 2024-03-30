import { SetStateAction, Dispatch } from "react";

export interface GameStateValueI {
  cookies: number;
  chips: number;
}

export type GameStateI = [
  GameStateValueI | null,
  Dispatch<SetStateAction<GameStateValueI | null>>
];
