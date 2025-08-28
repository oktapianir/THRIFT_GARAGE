const express = require("express");
// const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const productRoutes = require("./routes/products");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uplaods"));
app.use("/api/products", productRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
