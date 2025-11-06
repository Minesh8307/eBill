// Handles all sales (bills) related database operations in Firestore

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Reference to the "sales" collection
const salesRef = collection(db, "sales");

// ➕ Add a new sale (bill)
export const addSale = async (sale) => {
  // 'sale' should be an object like:
  // { customerName: "Rahul", date: new Date(), items: [...], total: 450 }
  await addDoc(salesRef, sale);
};

// 📋 Get all sales (bills)
export const getSales = async () => {
  const snapshot = await getDocs(salesRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};


