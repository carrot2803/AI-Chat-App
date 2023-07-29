import { COLORS } from "../constants";

export type Colors = { primary: string; text: string; background: string };

export const lightColors: Colors = { primary: COLORS.primary, text: COLORS.black, background: COLORS.white };
export const darkColors: Colors = { primary: COLORS.primary, text: COLORS.white, background: COLORS.black };
