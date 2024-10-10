import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, setToastList }) {
  return (
    toastList.length > 0 && (
      <ol className={styles.wrapper}>
        {toastList.map(({ variant, message, key }, i) => {
          return (
            <li className={styles.toastWrapper} key={key}>
              <Toast
                variant={variant}
                message={message}
                handleDismiss={() =>
                  setToastList([...toastList].filter((el) => el.key !== key))
                }
              />
            </li>
          );
        })}
      </ol>
    )
  );
}

export default ToastShelf;
