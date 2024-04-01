import { SetStateAction, Dispatch } from "react";

export interface TwoDimension {
  x: number;
  y: number;
}

export interface ChipI {
  id: number;
  pos: TwoDimension;
}

export interface GameStateValueI {
  cookies: number;
  chips: number;
}

export type GameStateI = [
  GameStateValueI | null,
  Dispatch<SetStateAction<GameStateValueI | null>>
];
