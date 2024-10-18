"use client";
import React from "react";

const SoundContext = React.createContext();

const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const value = {
    soundEnabled,
    toggleSound: () => setSoundEnabled((prev) => !prev),
  };
  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
};

export const useSoundContext = () => React.useContext(SoundContext);

export default SoundProvider;
