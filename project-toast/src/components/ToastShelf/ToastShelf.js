import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toastList, dismissToast } = useToastContext();
  return (
    toastList.length > 0 && (
      <ol className={styles.wrapper}>
        {toastList.map(({ variant, message, key, id }, i) => {
          return (
            <li className={styles.toastWrapper} key={key}>
              <Toast
                variant={variant}
                message={message}
                handleDismiss={() => dismissToast(id)}
              />
            </li>
          );
        })}
      </ol>
    )
  );
}

export default ToastShelf;
