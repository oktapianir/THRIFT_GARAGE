import React from "react";
import { Search, ShoppingCart, User, Instagram, Facebook, Twitter } from "lucide-react";
import bgThrift from "../assets/bg_thrift.png";

const Home = () => {
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
      borderBottom: "1px solid #E5E7EB",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2B3723",
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
      backgroundImage: `URL(${bgThrift})`,
    },
    heroLeft: {
      width: "50%",
      paddingLeft: "4rem",
      paddingRight: "2rem",
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
    heroTitle: {
      fontSize: "3.75rem",
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
      flexWrap: "wrap",
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
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>
            Second chances,
            <br />
            first class style
          </h1>
          <p style={styles.heroText}>
            Step into a world where fashion finds new meaning, every piece
            carries a
          </p>
          <p style={styles.heroText}>
            story and every style gets a second chance. Our thrift collections
            are
          </p>
          <p style={styles.heroText}>
            carefully curated to bring you unique and affordable fashion that
            never
          </p>
          <p style={styles.heroText}>goes out of style.</p>
          <p style={styles.heroSubtext}>Made to be loved again......</p>
          <button style={styles.shopButton}>Shop Now</button>
        </div>
      </div>

      {/* Brand Section */}
      <div style={styles.brandSection}>
        <div style={styles.brandContainer}>
          <div style={styles.brandText}>Adidas</div>
          <div style={styles.brandText}>ZARA</div>
          <div style={{ ...styles.brandText, ...styles.brandItalic }}>
            Champion
          </div>
          <div style={styles.brandText}>NIKE</div>
          <div style={styles.brandText}>H&M</div>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "3rem 1rem",
          backgroundColor: "#ffffff",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {[
          {
            title: "100% Dijamin kebersihan pakaian",
            description: "Barang thrift dijamin kebersihan pakaiannya",
            icon: "🧥",
          },
          {
            title: "Pengemasan berkualitas",
            description: "Selain bersih produk akan mendapatkan free packaging",
            icon: "📦",
          },
          {
            title: "Harga & promo menarik",
            description: "Tersedia paket bundling & paket usaha",
            icon: "💸",
          },
          {
            title: "Customer Support",
            description: "Layanan customer online 24/7",
            icon: "🧑‍🤝‍🧑",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              width: "220px",
              textAlign: "center",
              padding: "1.5rem",
              borderRadius: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)", 
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "2rem" }}>{item.icon}</div>
            <h4 style={{ fontWeight: "bold", marginTop: "1rem" }}>
              {item.title}
            </h4>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#4B5563",
                marginTop: "0.5rem",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* New Arrivals */}
      <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          NEW ARRIVALS
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
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

      {/* Testimonials Section */}
      <div style={{ backgroundColor: "#F9FAFB", padding: "3rem 1rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          TESTIMONI
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                width: "300px",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: "#4B5563", fontSize: "0.875rem" }}>
                Barangnya bagus, sesuai deskripsi, pengiriman cepat dan
                pelayanan ramah!
              </p>
              <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
                - Pelanggan
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        {/* Footer Top Promotional Banner */}
        <div style={styles.footerTop}>
          <div style={styles.footerPromo}>
            <h3 style={styles.footerPromoTitle}>
              STAY UP TO DATE FOR OUR LATEST OFFERS
            </h3>
          </div>
          <div>
            <button style={styles.footerPromoButton}>
              <span style={styles.liveBadge}>LIVE</span>
              THRIFT HUNT LIVE
            </button>
            <div style={styles.footerPromoSubtitle}>
              Cari barang branded murah bareng aku yuk!
              <br />
              #ThriftFinds #BrandedMurah #LiveShopping
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Instagram
                style={{ width: "1rem", height: "1rem", color: "#2B3723" }}
              />
            </div>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "#2B3723",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Facebook
                style={{ width: "1rem", height: "1rem", color: "#2B3723" }}
              />
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div style={styles.footerContent}>
          {/* Brand Section */}
          <div style={styles.footerBrand}>
            <h4 style={styles.footerBrandTitle}>THRIFT.GARAGE</h4>
            <p style={styles.footerBrandDescription}>
              We have a collection of sweaters and hoodies as well as more
              clothes, styles that are interesting for you
            </p>
            <div style={styles.socialIcons}>
              <div style={styles.socialIcon}>
                <Twitter style={styles.socialIconSvg} />
              </div>
              <div style={styles.socialIcon}>
                <Facebook style={styles.socialIconSvg} />
              </div>
              <div style={styles.socialIcon}>
                <Instagram style={styles.socialIconSvg} />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div style={styles.footerColumn}>
            <h5 style={styles.footerColumnTitle}>Company</h5>
            <a href="#" style={styles.footerLink}>
              Home
            </a>
            <a href="#" style={styles.footerLink}>
              About
            </a>
            <a href="#" style={styles.footerLink}>
              Katalog
            </a>
            <a href="#" style={styles.footerLink}>
              Contact
            </a>
          </div>

          {/* Help Links */}
          <div style={styles.footerColumn}>
            <h5 style={styles.footerColumnTitle}>Help</h5>
            <a href="#" style={styles.footerLink}>
              WhatsApp
            </a>
            <a href="#" style={styles.footerLink}>
              Instagram
            </a>
            <a href="#" style={styles.footerLink}>
              Call
            </a>
            <a href="#" style={styles.footerLink}>
              Email
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <p>Thrift.Garage ©2025 All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
