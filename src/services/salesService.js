import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const salesCollectionRef = collection(db, "sales");

// --- NEW FUNCTIONS ---
// We pass the userId to every function now

export const addSale = async (sale, userId) => {
  // Add the userId to the sale object
  return await addDoc(salesCollectionRef, {
    ...sale,
    userId: userId,
  });
};

export const getSales = async (userId) => {
  // Create a query to get sales ONLY "where" the userId matches
  const q = query(salesCollectionRef, where("userId", "==", userId));
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
