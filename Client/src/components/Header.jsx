import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 3rem",
      backgroundColor: "white",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    navLeft: {
      display: "flex",
      alignItems: "center",
      gap: "3rem",
    },
    navLink: {
      textDecoration: "none",
      color: "#374151",
      fontWeight: "500",
      fontSize: "0.875rem",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
    },
    navLinkActive: {
      textDecoration: "none",
      color: "#2B3723",
      fontWeight: "600",
      fontSize: "0.875rem",
      backgroundColor: "#f3f4f6",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2B3723",
      textDecoration: "none",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
    },
    searchContainer: {
      position: "relative",
    },
    searchInput: {
      paddingLeft: "2.5rem",
      paddingRight: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.5rem",
      width: "15rem",
      fontSize: "0.875rem",
      outline: "none",
    },
    searchIcon: {
      position: "absolute",
      left: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      width: "1rem",
      height: "1rem",
    },
    navIcon: {
      width: "1.25rem",
      height: "1.25rem",
      color: "#374151",
      cursor: "pointer",
    },
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLeft}>
        <Link
          to="/"
          style={isActiveLink("/") ? styles.navLinkActive : styles.navLink}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={isActiveLink("/about") ? styles.navLinkActive : styles.navLink}
        >
          About
        </Link>
        <Link
          to="/katalog"
          style={
            isActiveLink("/katalog") ? styles.navLinkActive : styles.navLink
          }
        >
          Katalog
        </Link>
        <Link
          to="/contact"
          style={
            isActiveLink("/contact") ? styles.navLinkActive : styles.navLink
          }
        >
          Contact
        </Link>
      </div>

      <Link to="/" style={styles.logo}>
        Thrift.Garage
      </Link>

      <div style={styles.navRight}>
        <div style={styles.searchContainer}>
          <Search style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for products..."
            style={styles.searchInput}
          />
        </div>
        <ShoppingCart style={styles.navIcon} />
        <div style={styles.navRight}>
          <Link to="/login">
            <User style={styles.navIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
