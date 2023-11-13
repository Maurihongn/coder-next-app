import React from "react";
import Button from "../components/UI/Button";
import AdminProductTable from "../components/admin/AdminProductTable";
import Link from "next/link";

const page = () => {
  return (
    <main className="container m-auto h-page px-4 w-full max-w-7xl lg:px-8 flex flex-col py-4 gap-4">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl">Panel de administración</h2>
        <Button className="p-2 bg-red-600 hover:bg-red-800 w-fit text-white rounded-sm">
          Cerrar sesión
        </Button>
      </div>
      <Link
        href={`/admin`}
        className="p-2 bg-neutral-900 w-fit text-white rounded-sm"
      >
        Nuevo producto
      </Link>
      <AdminProductTable />
    </main>
  );
};

export default page;
