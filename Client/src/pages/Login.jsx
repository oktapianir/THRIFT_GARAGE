// import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import bgThrift from "../assets/image-login.jpg";

const Login = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "white",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 3rem",
      backgroundColor: "white",
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
      transition: "color 0.3s",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "black",
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
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
      minHeight: "calc(100vh - 88px)",
    },
    heroLeft: {
      width: "50%",
      paddingLeft: "4rem",
      paddingRight: "2rem",
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
    heroTitle: {
      fontSize: "2.75rem",
      fontWeight: "bold",
      color: "black",
      lineHeight: "1.1",
      marginBottom: "2rem",
    },
    heroText: {
      color: "#374151",
      fontSize: "1rem",
      lineHeight: "1.6",
      marginBottom: "0.25rem",
    },
    heroSubtext: {
      color: "black",
      fontSize: "1rem",
      fontWeight: "500",
      marginTop: "1.5rem",
      marginBottom: "2.5rem",
    },
    shopButton: {
      backgroundColor: "#2B3723",
      color: "white",
      padding: "0.75rem 2rem",
      borderRadius: "9999px",
      fontWeight: "500",
      fontSize: "0.875rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    heroRight: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "4rem",
      paddingLeft: "5rem"
    },
    clothingRack: {
      position: "relative",
      width: "450px",
      height: "400px",
    },
    rackPole: {
      position: "absolute",
      left: "50%",
      top: "0",
      width: "0.75rem",
      height: "5rem",
      backgroundColor: "#d97706",
      borderRadius: "9999px",
      transform: "translateX(-50%)",
    },
    rackBar: {
      position: "absolute",
      top: "4rem",
      left: "2rem",
      right: "2rem",
      height: "0.75rem",
      backgroundColor: "#d97706",
      borderRadius: "9999px",
    },
    clothesContainer: {
      position: "absolute",
      top: "5rem",
      left: "3rem",
      right: "3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    clothingItem: {
      width: "3.5rem",
      height: "6rem",
      borderTopLeftRadius: "0.5rem",
      borderTopRightRadius: "0.5rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
    },
    hangerContainer: {
      position: "absolute",
      top: "3rem",
      left: "3.5rem",
      right: "3.5rem",
      display: "flex",
      justifyContent: "space-between",
    },
    hanger: {
      width: "0.5rem",
      height: "1.5rem",
      backgroundColor: "white",
      borderRadius: "0.125rem",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    },
    brandSection: {
      backgroundColor: "#2B3723",
      padding: "3rem 0",
    },
    brandContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5rem",
    },
    brandText: {
      color: "white",
      fontSize: "1.875rem",
      fontWeight: "bold",
    },
    brandItalic: {
      fontStyle: "italic",
    },
    // Footer Styles
    footer: {
      backgroundColor: "#2B3723",
      color: "white",
      padding: "3rem 0 2rem 0",
    },
    footerTop: {
      backgroundColor: "#1a1a1a",
      padding: "1.5rem 3rem",
      marginBottom: "2rem",
      borderRadius: "0.5rem",
      margin: "0 3rem 2rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    footerPromo: {
      display: "flex",
      flexDirection: "column",
    },
    footerPromoTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "white",
    },
    footerPromoSubtitle: {
      fontSize: "0.875rem",
      color: "#d1d5db",
    },
    footerPromoButton: {
      backgroundColor: "#dc2626",
      color: "white",
      padding: "0.75rem 2rem",
      borderRadius: "0.5rem",
      fontWeight: "500",
      fontSize: "0.875rem",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    liveBadge: {
      backgroundColor: "#dc2626",
      color: "white",
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
      borderRadius: "0.25rem",
      fontWeight: "bold",
    },
    footerContent: {
      padding: "0 3rem",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: "3rem",
    },
    footerBrand: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    footerBrandTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "white",
    },
    footerBrandDescription: {
      fontSize: "0.875rem",
      color: "#d1d5db",
      lineHeight: "1.6",
    },
    socialIcons: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
    },
    socialIcon: {
      width: "2rem",
      height: "2rem",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    socialIconSvg: {
      width: "1rem",
      height: "1rem",
      color: "#2B3723",
    },
    footerColumn: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    footerColumnTitle: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "white",
      marginBottom: "0.5rem",
    },
    footerLink: {
      fontSize: "0.875rem",
      color: "#d1d5db",
      textDecoration: "none",
      transition: "color 0.3s",
      cursor: "pointer",
    },
    footerBottom: {
      marginTop: "2rem",
      paddingTop: "2rem",
      borderTop: "1px solid #4b5563",
      textAlign: "center",
      color: "#d1d5db",
      fontSize: "0.875rem",
      padding: "0 3rem",
    },
  };

  return (
    <div style={styles.container}>
      {/* Main Hero Section */}
      <div style={styles.hero}>
        {/* New Arrivals */}
        <div style={{ padding: "2rem 1rem", textAlign: "center"}}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {[1].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "1rem",
                  padding: "1rem",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      lineHeight: "200px",
                      color: "#9CA3AF",
                    }}
                  >
                    Gambar Produk
                  </span>
                </div>
                <h3 style={{ fontWeight: "bold" }}>Ziprem Adidas</h3>
                <p style={{ color: "#6B7280" }}>Rp 175.000</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Clothing Rack */}
        <div style={styles.heroRight}>
          <img
            src={bgThrift}
            alt="Clothes for contact"
            style={{
              maxWidth: "80%",
              height: "auto",
              objectFit: "contain",
              maxHeight: "900px",
            }}
          />
        </div>
      </div>    
    </div>
  );
};

export default Login;
