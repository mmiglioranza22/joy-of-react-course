import React from "react";

const ToastContext = React.createContext();

export const useToastContext = () => {
  return React.useContext(ToastContext);
};

// Think API as consumer: You only want to create a toast (declarative), the message and variant
// are provided by the user (other component responsability, not provider's)

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  // To ensure deleting the correct toast
  const [id, setId] = React.useState(0);

  function createToast(message, variant) {
    const nextToasts = [
      ...toastList,
      {
        id: id,
        message,
        variant,
      },
    ];
    setToastList(nextToasts);
    setId((prev) => prev + 1);
  }

  function dismissToast(id) {
    const nextToasts = toastList.filter((toast) => {
      return toast.id !== id;
    });
    setToastList(nextToasts);
  }
  const value = React.useMemo(() => {
    return {
      toastList,
      createToast,
      dismissToast,
    };
  }, [toastList]);

  // adding a dismissAll will work in everyplace, but Escape key will be bound to this and will not work in other contexts / situations where it could be helpfull
  // function dismissAll() {
  //   setToastList([]);
  // }

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
