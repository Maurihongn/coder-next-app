import React from "react";
import Button from "../UI/Button";

const CartForm = () => {
  return (
    <section className=" w-full lg:max-w-sm">
      <h2 className="text-2xl mb-4">Resumen</h2>
      <div className="bg-white p-4 rounded-sm">
        <p className="text-lg text-neutral-900">Total: $ 1.156.889</p>
        <p className="text-lg text-neutral-900">N° items: 3</p>
        <p className="text-lg text-neutral-900">Envío: $ 10000</p>
        <p className="text-lg text-neutral-900">Total: $ 1.166.889</p>

        <form className="w-full flex flex-col gap-4 my-4">
          <input
            type="nombre"
            required
            placeholder="Tu nombre"
            className="p-2 rounded w-full border bg-neutral-200 block "
            name="nombre"
          />
          <input
            type="apellido"
            required
            placeholder="Tu apellido"
            className="p-2 rounded w-full border bg-neutral-200 block"
            name="apellido"
          />
          <input
            type="direccion"
            required
            placeholder="Tu dirección"
            className="p-2 rounded w-full border bg-neutral-200 block"
            name="direccion"
          />
          <input
            type="email"
            required
            placeholder="Tu email"
            className="p-2 rounded w-full border bg-neutral-200 block"
            name="email"
          />

          <Button type="submit" className="w-full">
            Finalizar compra
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CartForm;
