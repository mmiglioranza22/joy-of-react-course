import React from "react";
import ScreenSaver from "../../../../components/ScreenSaver";

function Color({ params }) {
  const { color } = params;
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={color} />
    </main>
  );
}

export default Color;
