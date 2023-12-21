'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import Button from '../../UI/Button';
import { db, storage } from '@/firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

const EditForm = ({ item }) => {
  const updateProduct = async (slug, values, file, router) => {
    let fileURL = values.image;

    if (file) {
      const storageRef = ref(storage, slug);
      const fileSnapshot = await uploadBytes(storageRef, file);
      fileURL = await getDownloadURL(fileSnapshot.ref);
    }

    const docRef = doc(db, 'productos', slug);
    return updateDoc(docRef, {
      title: values.title,
      description: values.description,
      inStock: Number(values.inStock),
      price: Number(values.price),
      type: values.type,
      image: fileURL,
    }).then(() => {
      toast.success('Producto actualizado exitosamente');
      router.push('/admin');
    });
  };

  const { slug, title, description, inStock, price, type, image } = item;
  const [values, setValues] = useState({
    title,
    description,
    inStock,
    price,
    type,
    image,
  });
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(slug, values, file, router);
  };
  return (
    <div className='m-auto mt-4 w-full max-w-lg'>
      <form onSubmit={handleSubmit} className='my-12'>
        <label>Nombre: </label>
        <input
          type='text'
          value={values.title}
          required
          className='p-2 rounded w-full border border-blue-100 block my-2'
          name='title'
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type='file'
          multiple={false}
          onChange={(e) => setFile(e.target.files[0])}
          className='p-2 rounded w-full border border-blue-100 block my-2'
        />

        <label>Precio: </label>
        <input
          type='number'
          value={values.price}
          required
          className='p-2 rounded w-full border border-blue-100 block my-2'
          name='price'
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type='number'
          value={values.inStock}
          required
          className='p-2 rounded w-full border border-blue-100 block my-2'
          name='inStock'
          onChange={handleChange}
        />

        <label>Categoria: </label>
        <input
          type='text'
          value={values.type}
          required
          className='p-2 rounded w-full border border-blue-100 block my-2'
          name='type'
          onChange={handleChange}
        />

        <label>Descripción: </label>
        <textarea
          value={values.description}
          className='resize-none w-full h-24 p-2 rounded border block border-blue-100 my-2'
          name='description'
          onChange={handleChange}
        />

        <Button type='submit'>Editar producto</Button>
      </form>
    </div>
  );
};

export default EditForm;
