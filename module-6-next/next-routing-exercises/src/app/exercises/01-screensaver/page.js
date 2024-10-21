import React from "react";

import Link from "next/link";

const colors = ["red", "blue", "teal", "pink", "white", "watermelon"];

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <ul>
        {colors.map((color) => {
          return (
            <li key={color}>
              <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
