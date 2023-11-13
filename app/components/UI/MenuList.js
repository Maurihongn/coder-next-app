import Link from "next/link";
import React from "react";

const MenuList = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <div
      className={`${
        open ? "visible opacity-100" : "invisible opacity-0"
      } transition-all fixed inset-0 bg-black/50 flex justify-start z-50 lg:hidden`}
    >
      <aside
        className={`${
          !open ? "-translate-x-64" : ""
        } transition-all w-64 bg-neutral-900`}
      >
        <div
          className="text-white text-right p-4 text-2xl"
          onClick={handleClose}
        >
          X
        </div>

        <nav className="flex flex-col gap-5 px-4 text-white">
          <Link onClick={handleClose} href={"/"}>
            Inicio
          </Link>
          <Link onClick={handleClose} href={"/catalog/all"}>
            Catalogo
          </Link>
          <Link onClick={handleClose} href={"/cart"}>
            Carrito
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
