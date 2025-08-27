import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const styles = {
    sidebar: {
      position: "fixed",
      top: 0,
      left: isOpen ? 0 : "-250px",
      width: "200px",
      height: "100%",
      backgroundColor: "#ffffff",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      padding: "1rem",
      transition: "left 0.3s ease",
      zIndex: 2000,
    },
    link: {
      display: "block",
      padding: "0.75rem 1rem",
      textDecoration: "none",
      color: "#374151",
      fontWeight: "500",
      borderRadius: "6px",
      transition: "background-color 0.2s",
    },
    linkHover: {
      backgroundColor: "#f3f4f6",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      fontSize: "1.25rem",
      cursor: "pointer",
      background: "none",
      border: "none",
      color: "#374151",
    },
  };

  return (
    <div style={styles.sidebar}>
      <button style={styles.closeButton} onClick={onClose}>
        ×
      </button>

      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/katalog" style={styles.link}>Katalog</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/login" style={styles.link}>Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
