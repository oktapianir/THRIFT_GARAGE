import React from "react";

const Dashboard = () => {
  // Dummy data contoh
  const totalProducts = 120;
  const totalOrdersToday = 15;
  const totalCustomers = 50;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#2B3723" }}>Dashboard Admin Thrift.Garage</h1>
      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        {/* Summary cards */}
        <div
          style={{
            flex: 1,
            background: "#F3F4F6",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>Total Produk</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {totalProducts}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#F3F4F6",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>Pesanan Hari Ini</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {totalOrdersToday}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#F3F4F6",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h3>Pelanggan Terdaftar</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {totalCustomers}
          </p>
        </div>
      </div>

      {/* Bagian manajemen produk sederhana */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Manajemen Produk</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "1rem",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f3f4f6" }}>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.75rem",
                  textAlign: "left",
                }}
              >
                Nama Produk
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.75rem",
                  textAlign: "left",
                }}
              >
                Kategori
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.75rem",
                  textAlign: "left",
                }}
              >
                Stok
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.75rem",
                  textAlign: "left",
                }}
              >
                Harga
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "0.75rem",
                  textAlign: "left",
                }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                Kaos Vintage
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                T-Shirt
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                25
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                Rp150.000
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                <button style={{ marginRight: "0.5rem" }}>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#f9fafb" }}>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                Jaket Denim
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                Jacket
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                10
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                Rp350.000
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.75rem" }}>
                <button style={{ marginRight: "0.5rem" }}>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Bagian pesanan */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Pesanan Terbaru</h2>
        <p>Daftar pesanan terbaru akan muncul di sini.</p>
      </section>
    </div>
  );
};

export default Dashboard;
