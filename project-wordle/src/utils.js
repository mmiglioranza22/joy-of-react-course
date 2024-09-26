export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const mapGuessedKeys = (guessKeystrokes, keyboardLayout) => {
  console.log({ guessKeystrokes, keyboardLayout });

  const mappedLayout = keyboardLayout.reduce(
    (a, c) => ({ ...a, [c.letter]: { status: c.status } }),
    {}
  );
  const mappedGuessedStrokes = guessKeystrokes.reduce(
    (a, c) => ({ ...a, [c.letter]: { status: c.status } }),
    {}
  );

  const newLayout = [];

  for (const key in mappedLayout) {
    const mappedStatus = mappedGuessedStrokes[key]?.status ?? "";
    newLayout.push({ letter: key, status: mappedStatus });
  }
  console.log({ newLayout });
  return newLayout;
};
