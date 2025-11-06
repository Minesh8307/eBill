# 🧾 eBILL Frontend

### ⚡ Smart Online Billing & Inventory Management System

**eBILL** is a modern web-based application designed for small and medium businesses to manage their **sales**, **inventory**, and **billing** all in one place.  
This repository contains the **frontend** code for the project, built using **React.js** and connected to **Firebase** as the backend.

---

## 🚀 Features

### 🏠 Home Page
- Displays a short **introduction** about eBILL as an online billing platform.  
- Clean, modern UI with a **Login** button at the top-right corner.  

### 🔐 Authentication
- **Login Form** with:
  - Email ID  
  - Password  
  - Login Button  
- **Signup Form** (via “New User? Create Account”) with:
  - Email  
  - Password  
  - Confirm Password  
- All user credentials are stored securely in **Firebase Authentication**.

### 📊 Dashboard (After Login)
- Displays two main options:
  - **🛒 Sell**
  - **📦 Inventory**

---

## 🧮 Inventory Management

Manage your product stock with real-time updates from Firebase.

**Features:**
- View all items in inventory (name, price, quantity).  
- Add new items using the **Add Item** button with fields:
  - Item Name  
  - Quantity  
  - Price per piece  
- All items are stored in Firebase Firestore/Realtime Database.  
- When items are sold, their quantities automatically decrease.

---

## 💰 Sell Module

Generate bills quickly and update stock automatically.

**Features:**
- Input fields for:
  - Customer Name  
  - Item(s) and Quantity  
- Auto-calculated **Total Price** based on selected items.  
- Clicking **Sell**:
  - Generates a **Bill** with Date, Time, and Item Details.  
  - Updates the inventory in real-time.  
- Example: If 3 toothbrushes are in stock and 2 are sold → Remaining quantity = 1.

---

## 🧾 Bill Generation

Each bill displays:
- Date and Time  
- Customer Name  
- Items Sold + Quantity  
- Total Amount  

*(Optional future upgrade: Print or download bill as PDF.)*

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript |
| **Backend** | Firebase Authentication + Firestore Database |
| **Hosting** | Firebase Hosting / GitHub Pages |
| **Version Control** | Git & GitHub |

## 📁 Folder Structure

