import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div className="intro-card glass">
        <h1>Welcome to <span className="highlight">eBILL</span></h1>
        <p>Smart online billing and inventory management made simple.</p>
        <Link to="/login" className="btn-primary">Login</Link>
      </div>
    </div>
  );
}

export default Homepage;

