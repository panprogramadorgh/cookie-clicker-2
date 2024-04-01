import type { ChipI } from "@/utils/definitions";
import { TwoDimension } from "@/utils/definitions";

export const getRandom = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomChipsPos = (
  numChips: number,
  spaceBetween: number,
  maxPos: number,
  minPos: number
): ChipI[] => {
  const chips: ChipI[] = [];

  for (let i = 0; i < numChips; i++) {
    // Se inserta una chip por ciclo

    const calculateChipPos = (): TwoDimension => {
      const xChipPos = getRandom(maxPos, minPos);
      const yChipPos = getRandom(maxPos, minPos);

      // Se comprueba si es valido el nuevo chipPos
      for (let currentChip of chips) {
        if (
          Math.abs(maxPos - minPos) / spaceBetween >
            Math.abs(xChipPos - currentChip.pos.x) ||
          Math.abs(maxPos - minPos) / spaceBetween >
            Math.abs(yChipPos - currentChip.pos.y)
        ) {
          return calculateChipPos();
        }
      }

      return { x: xChipPos, y: yChipPos };
    };
    chips.push({ id: chips.length, pos: calculateChipPos() });
  }
  return chips;
};
