import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard glass">
      <h2>Dashboard</h2>
      <p>Welcome to eBILL — choose a section:</p>
      <div className="card-container">
        <Link to="/sell" className="big-card blue">🛒 Sell</Link>
        <Link to="/inventory" className="big-card green">📦 Inventory</Link>
      </div>
    </div>
  );
}

export default Dashboard;

