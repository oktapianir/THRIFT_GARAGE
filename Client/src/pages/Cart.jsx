import {
  Search,
  ShoppingCart,
  User,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useCart } from "../pages/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  const styles = {
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
      {/* Testimonials Section */}
      <div style={{ backgroundColor: "#F9FAFB", padding: "3rem 1rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Let's Checkout Now!!
        </h2>
        <p>All of these items could be yours </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/*masih belum berhasil*/}
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                width: "300px",
              }}
            >
              {item.image_url_item && (
                <img
                  src={item.image_url_item}
                  alt={item.name_item}
                  style={{ width: "100%", borderRadius: "0.5rem" }}
                />
              )}
              <div style={{ marginBottom: "1rem" }}>
                {item.name_item || "No name"}
              </div>
              <div style={{ marginBottom: "1rem" }}>Rp
                {item.price_item ? item.price_item.toLocaleString() : "No price"}
              </div>
              <p style={{ color: "#4B5563", fontSize: "0.875rem" }}>
                {item.description || "No description"}
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

export default Cart;
