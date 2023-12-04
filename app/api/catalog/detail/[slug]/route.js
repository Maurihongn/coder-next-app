import { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  const { slug } = params;

  const docRef = doc(db, 'productos', slug);
  try {
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      return NextResponse.json(
        { message: 'Producto no encontrado' },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(docSnapshot.data(), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al obtener el producto' },
      {
        status: 500,
      }
    );
  }
}
