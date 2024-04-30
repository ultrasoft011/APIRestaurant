const express = require("express");
const router = express.Router();
const { getMenu } = require("../controllers/dish.controller.js");

// Ruta para obtener todos los platos (GET /dishes)
router.get("/", getMenu);

// Ruta para obtener un plato por su ID (GET /dishes/:id)
// router.get("/:id", dishController.getDishById);

// Ruta para crear un nuevo plato (POST /dishes)
// router.post("/", dishController.createDish);

// Ruta para actualizar un plato existente (PUT /dishes/:id)
// Necesitarás crear el controlador updateDish primero
// router.put("/:id", dishController.updateDish);

// Ruta para eliminar un plato (DELETE /dishes/:id)
// Necesitarás crear el controlador deleteDish primero
// router.delete("/:id", dishController.deleteDish);

module.exports = router;
