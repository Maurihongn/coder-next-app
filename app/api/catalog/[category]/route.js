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
import { LastPage } from '@mui/icons-material';

export async function GET(req, { params }) {
  const { category } = params;
  const orderby = req.nextUrl.searchParams.get('orderby') || '';
  const page = req.nextUrl.searchParams.get('page') || 1;
  const pagesize = req.nextUrl.searchParams.get('pageSize') || 50;

  const offset = (page - 1) * pagesize;

  //   console.log(order);
  const productosRef = collection(db, 'productos');

  let queries = [];

  if (category !== 'all') {
    queries.push(where('type', '==', category));
  }
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

  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

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
}
