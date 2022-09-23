// Tutorial javscript By Pemograman Jaman Now dengan tambahan node.js
// Javascript merupakan dinamic language
// Penggunaan javascript
"use strict";
// Function Baca Data
const bacaData = (data) => {
  return data;
};
// Function mencoba perulangan
const lopping = () => {
  let panjang = 20;
  let text = "";
  for (let i = 0; i < panjang; i++) {
    text += "Ini merupakan perulangan ke " + i.toString() + " ";
  }
  return text;
};
// Function recursive
const faktorialRecursive = (value) => {
  if (value === 1) {
    return 1;
  } else {
    return value * faktorialRecursive(value - 1);
  }
};
//  Express
const express = require("express");
const app = express();
//Menggunakan port 3000 di localhost
const port = 3000;

// Database menggunakan pgsql
const { Client } = require("pg");
const { rows } = require("pg/lib/defaults");
const pgsql = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "lius20071997",
  database: "card",
});
pgsql.connect();

const data_tmp = {
  title: "Hallo Dunia, sekarang javascript dapat run di server ",
};

// Routing dengan method GET
app.get("/belajar/", (req, res) => {
  pgsql.query("select * from card_content", (err, result) => {
    if (err) {
      console.log("cannot fetch data from database");
    }
    res.send(result.rows);
  });
});
app.listen(port, () => {
  console.log(data_tmp["title"]);
});
