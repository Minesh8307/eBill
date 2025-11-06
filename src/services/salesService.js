import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  doc, // Import doc
  runTransaction // Import runTransaction
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const salesCollectionRef = collection(db, "sales");

// This function is still good for fetching sales
export const getSales = async (userId) => {
  const q = query(salesCollectionRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// --- NEW TRANSACTION FUNCTION ---
// This function replaces the old 'addSale'
// It creates a sale AND updates the inventory at the same time
export const processSaleAndUpdateInventory = async (sale, userId, itemId, newQuantity) => {
  
  // 1. Get a reference to the specific inventory item doc
  const itemDocRef = doc(db, "inventory", itemId);
  
  // 2. Get a reference for the new sale doc
  const newSaleDocRef = doc(collection(db, "sales")); // This auto-generates an ID

  // 3. Run the transaction
  try {
    await runTransaction(db, async (transaction) => {
      // First, check the current stock from the database
      const itemDoc = await transaction.get(itemDocRef);
      if (!itemDoc.exists()) {
        throw "Item does not exist!";
      }

      const currentQuantity = itemDoc.data().quantity;
      if (currentQuantity < sale.quantity) {
        throw "Not enough stock!";
      }
      
      // If we have enough stock, proceed:
      
      // Operation A: Add the new sale
      transaction.set(newSaleDocRef, { ...sale, userId: userId });
      
      // Operation B: Update the inventory item's quantity
      transaction.update(itemDocRef, { quantity: newQuantity });
    });
    
    console.log("Transaction successful!");

  } catch (e) {
    console.error("Transaction failed: ", e);
    throw e; // Re-throw the error to be caught by the page
  }
};

// We keep the old addSale function just in case, but we won't use it
export const addSale = async (sale, userId) => {
  return await addDoc(salesCollectionRef, {
    ...sale,
    userId: userId,
  });
};
