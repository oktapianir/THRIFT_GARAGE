import React from "react";
import mainImage from "../assets/img-girbaud.jpeg";
import {useCart} from "../pages/CartContext";
import { useNavigate } from "react-router-dom";
// import React, {useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
const DetailItem = () => {
    const {addToCart} = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
      // checkout();

      navigate("/checkout");

    }
    // const {id} = useParams();
    // const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect (() => {
    //     fetch(`http://localhost:5000/api/products/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setProduct(data);
    //         setLoading(false);
    //     })
    //     .
    // })
    return (
    <div style={{ display: "flex", padding: "2rem", fontFamily: "Arial, sans-serif", gap: "2rem" }}>
      {/* Kiri: Gambar Produk */}
      <div style={{ flex: 1 }}>
        <img
          src= {mainImage}
          alt="Main Product"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            src="https://via.placeholder.com/80x100?text=1"
            alt="thumb1"
            style={{ borderRadius: "8px", cursor: "pointer" }}
          />
          <img
            src="https://via.placeholder.com/80x100?text=2"
            alt="thumb2"
            style={{ borderRadius: "8px", cursor: "pointer" }}
          />
          <img
            src="https://via.placeholder.com/80x100?text=3"
            alt="thumb3"
            style={{ borderRadius: "8px", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Kanan: Informasi Produk */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "0.5rem" }}>Wan Fashion</h3>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Loose Fit Hoodie</h1>
        <p style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>$24.99</p>

        {/* Info Pengiriman */}
        <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Order now to get it by Sep 30</p>

        {/* Tombol Add to Cart */}
        <button
          style={{
            marginTop: "1rem",
            width: "100%",
            padding: "1rem",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none",
          }}
            onClick={() => addToCart()}
        >
          Add to Cart
        </button>

        {/* Tombol Chekout */}
        <button
          style={{
            marginTop: "1rem",
            width: "100%",
            padding: "1rem",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none",
          }}
            onClick={() => handleCheckout()}
        >
          Checkout 
        </button>

        {/* Deskripsi */}
        <div style={{ marginTop: "2rem" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Description & Fit</h4>
          <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
            Loose fit sweatshirt hoodie in medium-weight cotton-blend fabric with a gently brushed inside. Jersey-lined
            drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem.
            Soft, brushed inside.
          </p>
        </div>

        {/* Shipping */}
        <div style={{ marginTop: "2rem" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Shipping</h4>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#4b5563" }}>
            <li>Free Shipping Available</li>
            <li>Standard Delivery: 3–5 Working Days</li>
            <li>Estimated Delivery: 30 September 2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default DetailItem;