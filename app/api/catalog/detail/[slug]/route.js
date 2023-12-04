import { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req, res, { params }) {
  const { slug } = params;

  const docRef = doc(db, 'productos', slug);

  try {
    const doc = await getDoc(docRef);

    if (!doc.exists()) {
      return new Response('Producto no encontrado', { status: 404 });
    }

    res.status(200).json(doc.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
