import React from "react";

import "./styles.css";
import ToastProvider, { ToastShelf } from "../../../components/ToastProvider";

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <ToastShelf />
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
