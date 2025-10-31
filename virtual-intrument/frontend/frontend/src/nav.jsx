import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "20px", 
      padding: "15px", 
      background: "#282c34",
      width: "100%"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/piano" style={{color: "white", textDecoration: "none"}}>Piano</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/feedback" style={{ color: "white", textDecoration: "none" }}>Feedback</Link>
    </nav>
  );
}
