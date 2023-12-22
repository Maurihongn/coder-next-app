import { NextResponse } from 'next/server';
import {
  collection,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase/config';
import { limit } from 'firebase/firestore';

export async function GET(req, { params }) {
  const { category } = params;

  const productosRef = collection(db, 'productos');

  let queries = [];

  if (category !== 'all') {
    queries.push(where('type', '==', category));
  }

  // Query the first page of docs

  const lastQuery = query(productosRef, ...queries);
  const documentSnapshots = await getDocs(lastQuery);

  const q = query(productosRef, ...queries);

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
