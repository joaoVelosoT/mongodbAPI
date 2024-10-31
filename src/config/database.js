const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // URL de conexão
    const mongoURI = "mongodb://localhost:27017/bancomongo";
    await mongoose.connect(mongoURI);

    console.log("MongoDB conectado!");
  } catch (error) {
    console.error("Erro ao conectar o Mongo: ", error);
    // Comando para parar a aplicação
    process.exit(1);
  }
};


module.exports = connectDB;

// instalar 
// https://www.mongodb.com/try/download/community
// https://www.mongodb.com/try/download/shell
