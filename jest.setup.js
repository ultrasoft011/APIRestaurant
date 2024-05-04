const mongoose = require("mongoose");

beforeAll(async () => {
  // Cierra cualquier conexión activa
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  // Conecta a una base de datos de prueba de MongoDB
  await mongoose.connect("mongodb://localhost/test-database", {
    serverSelectionTimeoutMS: 5000,
  });
});

afterAll(async () => {
  // Cierra la conexión a la base de datos de prueba
  await mongoose.connection.close();
});
