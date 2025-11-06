import { db } from "../config/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";

// This is the main "inventory" collection
const inventoryCollectionRef = collection(db, "inventory");

// --- NEW FUNCTIONS ---
// We pass the userId to every function now

export const addItem = async (item, userId) => {
  // Add the userId to the item object before saving
  return await addDoc(inventoryCollectionRef, {
    ...item,
    userId: userId, // This links the item to the user
  });
};

export const getItems = async (userId) => {
  // Create a query to get items ONLY "where" the userId matches
  const q = query(inventoryCollectionRef, where("userId", "==", userId));
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const deleteItem = async (id) => {
  // We don't need userId to delete, since the document ID (id) is unique
  return await deleteDoc(doc(db, "inventory", id));
};
