import React from "react";

import Interview from "./Interview";
import "./styles.css";
import SideBar from "./SideBar";

function InterviewExercise() {
  if (typeof window === null) {
    return null;
  }
  return (
    <main>
      <Interview />
      <SideBar />
    </main>
  );
}

export default InterviewExercise;
