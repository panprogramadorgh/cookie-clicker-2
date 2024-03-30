import type { ChipI, ChipPosI } from "@/utils/Cookie/types";

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

    const calculateChipPos = (): ChipPosI => {
      const xChipPos = getRandom(maxPos, minPos);
      const yChipPos = getRandom(maxPos, minPos);

      // Se comprueba si es valido el nuevo chipPos
      for (let currentChip of chips) {
        if (
          Math.abs(maxPos - minPos) / spaceBetween >
            Math.abs(xChipPos - currentChip.pos.xPos) ||
          Math.abs(maxPos - minPos) / spaceBetween >
            Math.abs(yChipPos - currentChip.pos.yPos)
        ) {
          return calculateChipPos();
        }
      }

      return { xPos: xChipPos, yPos: yChipPos };
    };
    chips.push({ id: chips.length, pos: calculateChipPos() });
  }
  return chips;
};
