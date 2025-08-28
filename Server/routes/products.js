const express = require("express");
const router = express.Router();
const db = require("../db");
const multer = require("multer");
const path = require("path");

// Konfigurasi upload gambar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// GET all products
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST: Tambah produk
router.post("/", upload.single("image"), (req, res) => {
  const { name_item, price_item, description } = req.body;
  const image_url_item = req.file ? req.file.filename : null;

  const query = `
    INSERT INTO products (name_item, price_item, image_url_item, description)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [name_item, price_item, image_url_item, description],
    (err, result) => {
      if (err) {
        console.error("Error insert:", err);
        return res.status(500).json({ error: "Gagal menyimpan produk" });
      }
      res.status(201).json({ message: "Produk berhasil ditambahkan!" });
    }
  );
});

//DELETE products
router.delete("/:id", (req, res)=>{
    const productId = req.params.id;
    const query = "DELETE FROM products WHERE id = ?";

    db.query(query, [productId], (err,result) => {
        if (err) {
            console.error("Error saat menghapus produk:", err);
            return res.status(500).json({ error: "Gagal menghapus  data produk"});
        }

    res.json({message: "Produk berhasil dihapus"});
    });
});

module.exports = router;
