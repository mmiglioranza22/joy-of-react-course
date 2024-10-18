"use client";
import React from "react";

// Golden rule: The first render should produce the same markup on the server AND the client (mind side effects: localstorage values used )
// for rendering) - Hydration mismatches

// Effects do not run on the server, regardless if they are client components (the effect only runs on the client)
// Effects run AFTER hydration takes place
function Counter() {
  const [count, setCount] = React.useState(0);
  // will run on the very first render and read the values stored in the client (if any)
  React.useEffect(() => {
    const local = Number(window.localStorage.getItem("saved-count"));
    if (local === null) {
      return;
    }
    setCount(local);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", local);
  }, [local]);

  return;
  <button className="count-btn" onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>;
}

export default Counter;
