"use client";
import React from "react";
import reducer from "./reducer";

const CartContext = React.createContext();

export const useCheckoutCartContext = () => React.useContext(CartContext);

function CheckoutCartProvider({ children }) {
  const [items, dispatch] = React.useReducer(reducer, null);

  React.useEffect(() => {
    const savedCheckout = JSON.parse(
      window.localStorage.getItem("checkout-cart")
    );

    if (savedCheckout !== null) {
      restoreItems(savedCheckout);
    } else {
      restoreItems([]);
    }
  }, []);

  React.useEffect(() => {
    // avoiding saving null to localstorage
    if (items !== null) {
      window.localStorage.setItem("checkout-cart", JSON.stringify(items));
    }
  }, [items]);

  const restoreItems = (items) =>
    dispatch({
      type: "restore-saved-items",
      items,
    });

  const addItem = (item) =>
    dispatch({
      type: "add-item",
      item,
    });

  const deleteItem = (item) =>
    dispatch({
      type: "delete-item",
      item,
    });

  const value = {
    items,
    addItem,
    deleteItem,
    restoreItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CheckoutCartProvider;
