import { db } from "@/firebase/config";
import {
  Timestamp,
  collection,
  doc,
  getDocs,
  increment,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqData = await req.json();
    const { values, cart } = reqData;

    const inventorySnapshot = await getDocs(collection(db, "productos"));

    const inventory = inventorySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const outOfStock = [];

    for (let item of cart) {
      const product = inventory.find((p) => p.id === item.slug);

      if (product.inStock < item.quantity) {
        outOfStock.push(product.id);
      }
    }

    if (outOfStock.length) {
      return NextResponse.json(
        { message: "Productos sin stock", outOfStock },
        { status: 400 }
      );
    }

    const batch = writeBatch(db);

    cart.forEach((item) => {
      const productRef = doc(db, "productos", item.slug);
      batch.update(productRef, {
        inStock: increment(-item.quantity),
      });
    });

    await batch.commit();

    const order = {
      client: values,
      items: cart.map((item) => ({
        title: item.title,
        price: item.price,
        slug: item.slug,
        quantity: item.quantity,
      })),
      date: new Date().toISOString(),
    };

    const docId = Timestamp.fromDate(new Date()).toMillis();
    const orderRef = doc(db, "orders", String(docId));
    await setDoc(orderRef, order);

    return NextResponse.json(
      { message: "Compra finalizada con exito" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error al crear la orden" },
      { status: 500 }
    );
  }
}
