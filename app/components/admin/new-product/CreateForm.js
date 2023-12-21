"use client";

import { Timestamp, deleteDoc, doc, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import Button from "../../UI/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "@/firebase/config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const createProduct = async (values, file, router) => {
  const createdAt = Timestamp.now();
  const slug = `${values.title.replace(/\s+/g, "-")}-${uuidv4()}`;
  const storageRef = ref(storage, slug);
  const fileSnapshot = await uploadBytes(storageRef, file);

  const fileURL = await getDownloadURL(fileSnapshot.ref);

  const docRef = doc(db, "productos", slug);
  return setDoc(docRef, {
    ...values,
    slug,
    createdDate: createdAt,
    image: fileURL,
  }).then(() => {
    toast.success("Producto creado exitosamente");
    router.push("/admin");
  });
};

const CreateForm = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    title: "",
    description: "",
    inStock: 0,
    price: 0,
    type: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(values, file, router);
  };
  return (
    <div className="m-auto mt-4 w-full max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-2"
          name="title"
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type="file"
          multiple={false}
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded w-full border border-blue-100 block my-2"
        />

        <label>Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-2"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-2"
          name="inStock"
          onChange={handleChange}
        />

        <label>Categoria: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-blue-100 block my-2"
          name="type"
          onChange={handleChange}
        />

        <label>Descripción: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-2"
          name="description"
          onChange={handleChange}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default CreateForm;
