export const NUM_OF_GUESSES_ALLOWED = 6;
export const KEYS = "QWERTYUIOPASDFGHJKLZXCVBNM";

export const KEYBOARD_LAYOUT = KEYS.split("").reduce(
  (a, c) => ({ ...a, [c]: { status: "" } }),
  {}
);
