"use client";
import React from "react";

import DATA from "./data";
import StoreItem from "./StoreItem";
import CheckoutFlow from "./CheckoutFlow";
import "./styles.css";
import { useCheckoutCartContext } from "./CheckoutCartProvider";

function CheckoutExercise() {
  const { items, addItem, deleteItem, restoreItems } = useCheckoutCartContext();

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem key={item.id} item={item} addItem={addItem} />
          ))}
        </div>

        <CheckoutFlow items={items} taxRate={0.15} deleteItem={deleteItem} />
      </main>
    </>
  );
}

export default CheckoutExercise;
