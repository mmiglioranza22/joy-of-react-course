import React from "react";

import "./styles.css";
import CheckoutCartProvider from "./exercises/02-checkout/CheckoutCartProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CheckoutCartProvider>{children}</CheckoutCartProvider>
      </body>
    </html>
  );
}

export default RootLayout;
