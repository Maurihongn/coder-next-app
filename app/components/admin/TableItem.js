"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { MaterialSymbolsDeleteForever } from "../UI/Icons/MaterialSymbolsDeleteForever";
import Image from "next/image";
import Link from "next/link";
import { MaterialSymbolsEdit } from "../UI/Icons/MaterialSymbolsEdit";
import { toast } from "sonner";
import { db, storage } from "@/firebase/config";

const TableItem = ({ item }) => {
  const handleDelete = async () => {
    try {
      // Referencia al doc de Firestore
      const docRef = doc(db, "productos", item.slug);

      // Eliminar doc de Firestore
      await deleteDoc(docRef);

      // Referencia a la imagen en Storage
      const storageRef = ref(storage, item.image);

      // Eliminar imagen de Storage
      await deleteObject(storageRef);

      toast.success("Producto eliminado exitosamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al eliminar el producto");
    }
  };
  return (
    <tr>
      <td className="px-2">
        <Image src={item.image} alt={item.title} width={80} height={80} />
      </td>
      <td className="line-clamp px-2">{item.title}</td>
      <td className="px-2">{item.price}</td>
      <td className="px-2">{item.inStock}</td>
      <td className="px-2">{item.type}</td>
      <td className=" truncate max-w-prose px-2">{item.description}</td>
      <td className="flex gap-2 px-2 items-center justify-center">
        <Link
          href={`/admin/edit-product/${item.slug}`}
          className="rounded bg-green-500 hover:bg-green-800 p-2 text-white flex items-center justify-center"
        >
          <MaterialSymbolsEdit width={32} height={32} />
        </Link>

        <button
          type="button"
          className="rounded bg-red-500 hover:bg-red-800 p-2 text-white flex items-center justify-center"
          onClick={handleDelete}
        >
          <MaterialSymbolsDeleteForever width={32} height={32} />
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
