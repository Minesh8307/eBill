import React, { useEffect, useState } from "react";
import { addItem, getItems, deleteItem } from "../services/inventoryService";
import { useAuth } from "../context/AuthContext"; // Import useAuth

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const { currentUser } = useAuth(); // Get the logged-in user

  const fetchItems = async () => {
    if (!currentUser) return; // Don't fetch if user isn't logged in
    const data = await getItems(currentUser.uid); // Pass userId
    setItems(data);
  };

  // fetchItems will run when the component loads AND when currentUser changes
  useEffect(() => {
    fetchItems();
  }, [currentUser]); 

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.name || !form.quantity || !form.price || !currentUser)
      return alert("Please fill all fields!");
    
    await addItem({
      name: form.name,
      quantity: Number(form.quantity),
      price: Number(form.price),
    }, currentUser.uid); // Pass userId
    
    setForm({ name: "", quantity: "", price: "" });
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div className="glass">
      <h2>Inventory</h2>
      <form onSubmit={handleAdd} className="inventory-form">
        <input placeholder="Item Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Quantity" type="number" min="0" value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
        <input placeholder="Price" type="number" min="0" step="0.01" value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <button type="submit" className="btn-primary">Add Item</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.quantity}</td>
                <td>₹{i.price}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(i.id)}>🗑️</button>
                </td>
              </tr>
            ))
          ) : (
             <tr><td colSpan="4" style={{textAlign: "center"}}>No items in inventory.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

