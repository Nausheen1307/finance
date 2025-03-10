import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Finance Manager</h2>
      <Link to="/dashboard">📊 Dashboard</Link>
      <Link to="/transactions">💰 Transactions</Link>
      <Link to="/budget">📉 Budget</Link>
      <Link to="/savings">💵 Savings</Link>
      <Link to="/settings">⚙️ Settings</Link>
      <Link to="/account">👤 Account</Link>
      <Link to="/about">📜 About</Link>
    </div>
  );
};

export default Sidebar;
