import { cartMock } from "@/data/mocks";
import React from "react";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <section className="w-full lg:max-w-4xl">
      <h2 className="text-2xl">Tu carrito</h2>
      <div>
        {cartMock && cartMock.length ? (
          <ul>
            {cartMock.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <h3>No tenes items en el carrito</h3>
        )}
      </div>
    </section>
  );
};

export default CartList;
