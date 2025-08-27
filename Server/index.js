const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "thrift_garage",
});

db.connect((err) => {
  if (err){
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySql database");
})

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      return res.status(500).json({error : err});
    }
    res.json(results);
  });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
