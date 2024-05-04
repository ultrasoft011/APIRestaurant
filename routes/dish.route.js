const express = require("express");
const router = express.Router();
const {
  getMenu,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
} = require("../controllers/dish.controller.js");

// Ruta para obtener todos los platos (GET /dishes)
router.get("/", getMenu);
router.get("/:id", getDishById);
router.post("/", createDish);
router.put("/:id", updateDish);
router.delete("/:id", deleteDish);

module.exports = router;
