import React from "react";

async function Discussion({ children }) {
  return (
    <section className="comments-section">
      <h2>Discussion</h2>
      {children}
    </section>
  );
}

export default Discussion;
