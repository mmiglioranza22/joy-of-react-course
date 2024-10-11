import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    function handleEscape(ev) {
      if (ev.code === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);
  return callback;
};
