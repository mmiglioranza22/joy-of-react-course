"use client";
import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const local = Number(window.localStorage.getItem("saved-count")) || 0;

    setCount(local);

    window.localStorage.setItem("saved-count", local);
  }, []);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
