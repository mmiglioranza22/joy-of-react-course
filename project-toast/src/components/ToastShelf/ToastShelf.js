import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToastContext } from "../ToastProvider";
import { useEscapeKey } from "../../hooks";

function ToastShelf() {
  const { toastList, dismissToast } = useToastContext();
  // Adding the escape hook is better since it will live as long as toasts exists

  const handleDismiss = React.useCallback(dismissToast, []);
  // dismissToast callback is regenerated on every render if it is passes as a dependency array in escape key hook
  // useCallback fixes this, but is an extra step that can be avoided if we just pass an empty array for the hook's useEffect dependencies
  // will depend on the implementation

  const effectDismissToast = useEscapeKey(handleDismiss);

  return (
    toastList.length > 0 && (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
      >
        {toastList.map(({ variant, message, key, id }, i) => {
          return (
            <li className={styles.toastWrapper} key={key}>
              <Toast
                variant={variant}
                message={message}
                handleDismiss={() => effectDismissToast(id)}
              />
            </li>
          );
        })}
      </ol>
    )
  );
}

export default ToastShelf;
