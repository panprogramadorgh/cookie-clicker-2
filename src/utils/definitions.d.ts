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

export interface GadGet {
  id: number;
  name: string;
  description: string;
  price: number;
  maxLevel: number;
  level: number;
}

export interface GameTab {
  name: string;
  path: string;
}

export interface FooterLink {
  name: string;
  path: string;
  icon: React.ReactNode;
}
