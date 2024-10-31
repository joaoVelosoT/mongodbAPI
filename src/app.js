require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routers/router");
const database = require("./config/database");
const port = process.env.PORT || 1020;

app.use(express.json());
app.use("/", router);

app.listen(port, async () => {
  try {
    await database();
  } catch (error) {
    console.error(error);
    console.error("Conexão com o banco de dados falhou");
  }

  console.log("----------------------------------------------");
  console.log("Servidor no ar");
  console.log("----------------------------------------------");
});
