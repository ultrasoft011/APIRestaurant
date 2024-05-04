const express = require("express");
const mongoose = require("mongoose");
const dishRoute = require("./routes/dish.route.js");
const app = express();
const password = "safe2008"; // Tu contraseña
const encodedPassword = encodeURIComponent(password);
const connectionString = `mongodb+srv://ultrasoft011:${encodedPassword}@backenddb.oynszhp.mongodb.net/`;

//Middleware: we are not allow to pass JSON to our NODE js by default so we use a middleware.
app.use(express.json()); // able to receive JSON in the API
app.use(express.urlencoded({ extended: false })); // To handle other kind of Form in our crud

// routes
app.use("/api/dishes", dishRoute);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Middleware para analizar el cuerpo de las solicitudes, ya esta incluido en express a partir de la version 4.16.0
// app.use(bodyParser.json());

// Endpoint para obtener todo el menú
// app.get("/menu", async (req, res) => {
//   try {
//     Consulta todos los platos en la base de datos
//     const menu = await Dish.find({});

//     Responde con el menú obtenido
//     res.status(200).json(menu);
//   } catch (error) {
//     Si ocurre un error, responde con un código de estado 500 y el mensaje de error
//     res.status(500).json({ message: error.message });
//   }
// });

// Función para obtener un plato por su ID
// app.get("/dish/:id", (req, res) => {
//   const id = req.params.id;
//   const dish = menu.find((dish) => dish.id === id);
//   if (!dish) {
//     res.status(404).json({ error: "Dish not found" });
//   } else {
//     res.json(dish);
//   }
// });

// // Endpoint para crear un nuevo plato
// app.post("/dish", (req, res) => {
//   const newDish = req.body;
//   menu.push(newDish);
//   res.status(201).json(newDish);
// });

// // Endpoint para actualizar un plato existente
// app.put("/dish/:id", (req, res) => {
//   const id = req.params.id;
//   const updatedDish = req.body;
//   const index = menu.findIndex((dish) => dish.id === id);
//   if (index === -1) {
//     res.status(404).json({ error: "Dish not found" });
//   } else {
//     menu[index] = { ...menu[index], ...updatedDish };
//     res.json(menu[index]);
//   }
// });

// // Endpoint para eliminar un plato por su ID
// app.delete("/dish/:id", (req, res) => {
//   const id = req.params.id;
//   const index = menu.findIndex((dish) => dish.id === id);
//   if (index === -1) {
//     res.status(404).json({ error: "Dish not found" });
//   } else {
//     const deletedDish = menu.splice(index, 1);
//     res.json(deletedDish[0]);
//   }
// });

// // Endpoint para obtener todos los platos
// app.get("/api/dishes", async (req, res) => {
//   try {
//     // Consulta todos los platos de la base de datos
//     const dishes = await Dish.find();
//     res.status(200).json(dishes);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/dishes", async (req, res) => {
//   try {
//     // Save the dish
//     const dish = await Dish.create(req.body);
//     console.log(req.body);
//     res.status(200).json(dish);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   // console.log(req.body);
//   // res.send(req.body);
// });

// // Endpoint para obtener un plato por su ID
// app.get("/api/dishes/:id", async (req, res) => {
//   try {
//     // Obtén el ID del plato de los parámetros de la URL
//     const dishId = req.params.id;

//     // Busca el plato en la base de datos por su ID
//     const dish = await Dish.findById(dishId);

//     // Si el plato no existe, responde con un código de estado 404
//     if (!dish) {
//       return res.status(404).json({ message: "Dish not found" });
//     }

//     // Si el plato existe, responde con el plato encontrado
//     res.status(200).json(dish);
//   } catch (error) {
//     // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
//     res.status(500).json({ message: error.message });
//   }
// });

// // UPDATE
// app.put("/api/dishes/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const dish = await Dish.findByIdAndUpdate(id, req.body);
//     if (!dish) {
//       return res.status(404).json({ message: "Dish not found" });
//     }
//     const updatedDish = await Dish.findById(id);
//     res.status(200).json(updatedDish);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Endpoint para eliminar un plato por su ID
// app.delete("/api/dishes/:id", async (req, res) => {
//   try {
//     // Obtén el ID del plato de los parámetros de la URL
//     const dishId = req.params.id;

//     // Busca el plato en la base de datos por su ID y elimínalo
//     const deletedDish = await Dish.findByIdAndDelete(dishId);

//     // Si el plato no existe, responde con un código de estado 404
//     if (!deletedDish) {
//       return res.status(404).json({ message: "Dish not found" });
//     }

//     // Responde con el plato eliminado
//     res
//       .status(200)
//       .json({ message: "Product deleted successfully", deletedDish });
//   } catch (error) {
//     // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to Restaurant API MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = app;
