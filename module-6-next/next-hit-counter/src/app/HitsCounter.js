import React from "react";
import { readFile, writeFile } from "../helpers/file-helpers";
const DATABASE_PATH = "/src/database.json";
function HitsCounter({ children }) {
  const count = readFile(DATABASE_PATH);
  const hits = JSON.parse(count)?.hits;

  writeFile(DATABASE_PATH, JSON.stringify({ hits: hits + 1 }));
  return hits;
}

export default HitsCounter;
