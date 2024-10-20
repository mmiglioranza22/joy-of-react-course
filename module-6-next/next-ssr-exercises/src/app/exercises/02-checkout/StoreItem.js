import React from "react";

function StoreItem({ item, addItem }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price);

  return (
    <article>
      <img src={item.imageSrc} alt={item.imageAlt} />
      <h2>{item.title}</h2>
      <p>{price}</p>
      <button onClick={() => addItem(item)}>Add to Cart</button>
    </article>
  );
}

export default StoreItem;
