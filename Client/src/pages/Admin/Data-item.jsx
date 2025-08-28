import React,{ useState, useEffect }from "react";

const DataItem = () => {
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
  body: dataToSubmit
})
  .then(res => res.json())
  .then(data => {
    console.log("Response from server:", data);

  })
  .catch(err => {
    console.error("Error submitting form:", err);
  });

    console.log("Submit data produk:", formData, imageFile);
    //Reset form setelah submit
    setFormData({ name_item: "", price_item: "", description: "" });
    setImageFile(null);
    e.target.reset();
  };

  const handleDelete = (id) => {
    if(window.confirm("Yakin ingin menghapus data produk ini?")) {
        fetch(`http://localhost:5000/api/products/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Produk dihapus:", data);
            setProducts((prevProducts) =>
                prevProducts.filter((item) => item.id !==id)
            );
        })
        .catch((err) => {
            console.error("Gagal menghapus:", err);
        })
    }
  }

  const thStyle = {
    border: "1px solid #ddd",
    padding: "0.75rem",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "0.75rem",
  };

   return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "1000px" }}>
      <h1 style={{ color: "#2B3723", marginBottom: "1rem" }}>Manajemen Produk</h1>

      {/* === FORM TAMBAH PRODUK === */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          marginBottom: "3rem",
          textAlign: "left"
        }}
      >
        <h2>Tambah Produk</h2>
        <label>
          Nama Produk:
          <input
            type="text"
            name="name_item"
            value={formData.name_item}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>
        <label>
          Harga:
          <input
            type="number"
            name="price_item"
            value={formData.price_item}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>
        <label>
          Deskripsi:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>
        <label>
          Gambar:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#2B3723",
            color: "white",
            padding: "0.75rem",
            border: "none",
            cursor: "pointer",
            width: "150px",
          }}
        >
          Tambah Produk
        </button>
      </form>

      {/* === TABEL DATA PRODUK === */}
      <h2>Daftar Produk</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6" }}>
            <th style={thStyle}>Nama</th>
            <th style={thStyle}>Harga</th>
            <th style={thStyle}>Deskripsi</th>
            <th style={thStyle}>Gambar</th>
            <th style={thStyle}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.name_item}</td>
              <td style={tdStyle}>Rp{item.price_item.toLocaleString()}</td>
              <td style={tdStyle}>{item.description}</td>
              <td style={tdStyle}>
                {item.image_url_item ? (
                  <img
                    src={`http://localhost:5000/uploads/${item.image_url_item}`}
                    alt={item.name_item}
                    width="70"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td style={tdStyle}>
                <button style={{ marginRight: "0.5rem" }}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataItem;
