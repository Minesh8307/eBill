import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirm) return alert("Passwords do not match!");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container glass">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} required />
        <button className="btn-primary">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignupPage;


