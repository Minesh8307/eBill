import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const inventoryRef = collection(db, "inventory");

export const addItem = async (item) => await addDoc(inventoryRef, item);
export const getItems = async () => {
  const snapshot = await getDocs(inventoryRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const updateItem = async (id, updatedData) => await updateDoc(doc(db, "inventory", id), updatedData);
export const deleteItem = async (id) => await deleteDoc(doc(db, "inventory", id));

