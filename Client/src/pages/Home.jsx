import { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  ShoppingCart,
  User,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import bgThrift from "../assets/bg_thrift.png";

const Home = () => {
  const [products, setProducts] = useState([]);
  const imageBaseUrl = "http://localhost:5000/uploads";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data produk:", error);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          backgroundImage: `url(${bgThrift})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ width: "50%", padding: "4rem" }}>
          <h1 style={{ fontSize: "3.75rem", fontWeight: "bold" }}>
            Second chances, <br /> first class style
          </h1>
          <p style={{ color: "#374151", marginTop: "1rem" }}>
            Step into a world where fashion finds new meaning. Every piece
            carries a story.
          </p>
          <button
            style={{
              marginTop: "2rem",
              backgroundColor: "#2B3723",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Brand Section */}
      <div style={{ backgroundColor: "#2B3723", padding: "3rem 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5rem",
            flexWrap: "wrap",
          }}
        >
          {["Adidas", "ZARA", "Champion", "NIKE", "H&M"].map((brand, idx) => (
            <div
              key={idx}
              style={{
                color: "white",
                fontSize: "1.875rem",
                fontWeight: "bold",
                fontStyle: brand === "Champion" ? "italic" : "normal",
              }}
            >
              {brand}
            </div>
          ))}
        </div>
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
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "1rem",
                  padding: "1rem",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                <img
                   src={`${imageBaseUrl}/${item.image_url_item}`}
                  alt={item.name_item}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                  }}
                />
                <h3 style={{ fontWeight: "bold" }}>{item.name_item}</h3>
                <p style={{ color: "#6B7280" }}>
                  Rp {parseInt(item.price_item).toLocaleString("id-ID")}
                </p>
                <button
                  style={{
                    marginTop: "0.5rem",
                    border: "1px solid #D1D5DB",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  See More
                </button>
              </div>
            ))
          ) : (
            <p>Loading produk...</p>
          )}
        </div>
      </div>
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
         Testimoni Here!!
        </h2>
        <p>All testimonials from Thrift.Garage customers</p>
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
      <footer
        style={{
          backgroundColor: "#2B3723",
          color: "white",
          padding: "2rem 3rem",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              THRIFT.GARAGE
            </h4>
            <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
              We have a collection of sweaters and hoodies, plus more clothes,
              styles that are interesting for you.
            </p>
          </div>

          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
              Company
            </h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Home", "About", "Katalog", "Contact"].map((link, idx) => (
                <li key={idx} style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Help</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["WhatsApp", "Instagram", "Call", "Email"].map((link, idx) => (
                <li key={idx} style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            borderTop: "1px solid #4b5563",
            paddingTop: "1rem",
            fontSize: "0.875rem",
          }}
        >
          Thrift.Garage ©2025 All Right Reserved
        </div>
      </footer>
    </div>
  );
};

export default Home;
