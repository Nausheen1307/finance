import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Finance Manager</h2>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/savings">Savings</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/account">Accounts</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
