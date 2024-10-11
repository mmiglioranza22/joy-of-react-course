import React from "react";

const ToastContext = React.createContext();

export const useToastContext = () => {
  return React.useContext(ToastContext);
};

function ToastProvider({ children }) {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toastList, setToastList] = React.useState([]);
  // To ensure deleting the correct toast
  const [id, setId] = React.useState(0);

  const value = React.useMemo(() => {
    return {
      variant,
      setVariant,
      message,
      setMessage,
      toastList,
      setToastList,
      id,
      setId,
    };
  }, [variant, message, toastList, id]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
