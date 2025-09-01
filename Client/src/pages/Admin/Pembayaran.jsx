import React, { useState, useEffect } from "react";

const Pembayaran = () => {
  const [formData, setFormData] = useState({
    name_item: "",
    price_item: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = new FormData();
    dataToSubmit.append("name_item", formData.name_item);
    dataToSubmit.append("price_item", formData.price_item);
    dataToSubmit.append("description", formData.description);
    if (imageFile) {
      dataToSubmit.append("image", imageFile);
    }

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: dataToSubmit,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        setProducts((prev) => [...prev, data]);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
      });

    setFormData({ name_item: "", price_item: "", description: "" });
    setImageFile(null);
    e.target.reset();
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus data produk ini?")) {
      fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setProducts((prevProducts) =>
            prevProducts.filter((item) => item.id !== id)
          );
        })
        .catch((err) => {
          console.error("Gagal menghapus:", err);
        });
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "0.25rem",
    display: "block",
    textAlign: "left",
  };

  const formGroup = {
    marginBottom: "1.25rem",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "0.75rem",
    textAlign: "left",
    backgroundColor: "#f3f4f6",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "0.75rem",
  };

  const actionButton = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#2B3723", marginBottom: "1rem" }}>Data Pembayaran</h1>

      {/* TABEL PRODUK */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Id Pembayaran</th>
            <th style={thStyle}>Nama</th>
            <th style={thStyle}>Harga</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Bukti</th>
            <th style={thStyle}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.name_item}</td>
              <td style={tdStyle}>
                Rp{Number(item.price_item).toLocaleString("id-ID")}
              </td>
              <td style={tdStyle}>{item.description}</td>
              <td style={tdStyle}>
                {item.image_url_item ? (
                  <img
                    src={`http://localhost:5000/uploads/${item.image_url_item}`}
                    alt={item.name_item}
                    width="70"
                    style={{ borderRadius: "4px" }}
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td style={tdStyle}>
                <button
                  style={{
                    ...actionButton,
                    backgroundColor: "#083009ff",
                    color: "white",
                  }}
                  onClick={() => alert("Fitur edit belum tersedia")}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    ...actionButton,
                    backgroundColor: "#5e0701ff",
                    color: "white",
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pembayaran;
