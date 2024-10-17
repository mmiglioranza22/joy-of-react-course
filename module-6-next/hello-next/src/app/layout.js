import React from "react";

import "./styles.css";
import Footer from "./Footer";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
