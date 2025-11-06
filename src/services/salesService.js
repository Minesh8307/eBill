import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const salesRef = collection(db, "sales");

export const addSale = async (sale) => await addDoc(salesRef, sale);
export const getSales = async () => {
  const snapshot = await getDocs(salesRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

