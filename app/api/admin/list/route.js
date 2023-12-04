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

export async function GET(req) {
  const orderby = req.nextUrl.searchParams.get('orderby') || '';
  const page = req.nextUrl.searchParams.get('page') || 1;
  const pagesize = req.nextUrl.searchParams.get('pageSize') || 50;

  //   console.log(order);
  const productosRef = collection(db, 'productos');

  let queries = [];

  try {
    const collTotal = (
      await getCountFromServer(query(productosRef, ...queries))
    ).data().count;

    const totalPages = Math.ceil(collTotal / pagesize);

    if (orderby === 'new') {
      queries.push(orderBy('creationDate', 'desc'));
    }
    queries.push(limit(pagesize));

    // Query the first page of docs

    const lastQuery = query(productosRef, ...queries);
    const documentSnapshots = await getDocs(lastQuery);

    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];

    if (page > 1) {
      queries.push(startAfter(lastVisible));
    }

    const q = query(productosRef, ...queries);

    const querySnapshot = await getDocs(q);

    const docs = querySnapshot.docs.map((doc) => doc.data());

    console.log(docs);

    return NextResponse.json({
      data: docs,
      totalPages,
      currentPage: page,
      pageSize: pagesize,
      totalItems: collTotal,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error al obtener el producto' },
      {
        status: 500,
      }
    );
  }
}
